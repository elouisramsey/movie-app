import { API } from 'aws-amplify'
import { useAppDispatch } from 'store/Hooks/hooks'
import { setUser } from 'store/User/UserSlice'
import { getUser } from './graphql/queries'

export const getUserFromDb = async (id: number) => {
  const dispatch = useAppDispatch()
  const userInfo = (await API.graphql({
    query: getUser,
    variables: {
      id
    }
  })) as any
  const data = userInfo.data.getUser
  dispatch(setUser(data))
  console.log({
    function: 'collins'
  });
}
