import uuid from 'react-native-uuid'
import { API, Auth } from 'aws-amplify'
import { createTickets, updateUser } from 'src/graphql/mutations'
import { getUser } from 'src/graphql/queries'
import { useAppSelector } from 'store/Hooks/hooks'

type Props = {
  setLoading: (val: boolean) => void
  setShowModal: (val: boolean) => void
}

export const createTicketonDb = async ({ setLoading, setShowModal }: Props) => {
  const ticketInfo = useAppSelector((state) => state.cinema)
  const isUserAvailable = await Auth.currentAuthenticatedUser()
  setLoading(true)
  try {
    const createTicket = (await API.graphql({
      query: createTickets,
      variables: {
        input: {
          id: uuid.v4().slice(0, 18),
          name: ticketInfo.movieName,
          date: ticketInfo.date,
          time: ticketInfo.time,
          theatre: ticketInfo.theatre,
          Image: ticketInfo.moviePoster,
          seat: ticketInfo.selectedSeat,
          reference: uuid.v4().slice(0, 7)
        }
      }
    })) as any

    const getUserFromDb = (await API.graphql({
      query: getUser,
      variables: {
        id: isUserAvailable.attributes.sub
      }
    })) as any

    if (createTicket) {
      const { name, points, tickets, email } = getUserFromDb.data.getUser
      const updateUserInfo = await API.graphql({
        query: updateUser,
        variables: {
          input: {
            id: isUserAvailable.attributes.sub,
            email: email,
            name: name,
            points: points + 3,
            watched: 0,
            Image: '',
            tickets:
              tickets === null
                ? [createTicket.data?.createTickets.id]
                : [...tickets, createTicket?.data.createTickets.id]
          }
        }
      })
      if (updateUserInfo) {
        setLoading(false)
        setShowModal(true)
      }
    }
  } catch (error) {
    console.log(error)
    setLoading(false)
  }
}
