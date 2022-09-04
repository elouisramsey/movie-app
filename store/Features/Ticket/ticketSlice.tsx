import { createSlice } from '@reduxjs/toolkit'
import { cinemaRolls, extrasData } from 'store/FakeData'

const initialState = {
  seats: cinemaRolls,
  extras: extrasData
}

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    addTicket: (state: any, { payload }: any) => {
      const { id } = payload
      const findSeat = state.seats?.find((seat: any) => seat.id === id)

      if (findSeat) {
        return {
          ...state,
          seats: state.seats.map((seat: any) => {
            if (seat.id === id) {
              return {
                ...seat,
                selected: !seat.selected,
                available: !seat.available
              }
            }
            return seat
          })
        }
      }
    },
    addExtra: (state: any, { payload }: any) => {
      const { id } = payload
      const findExtra = state.extras?.find((extra: any) => extra.id === id)

      if (findExtra) {
        return {
          ...state,
          extras: state.extras.map((extra: any) => {
            if (extra.id === id) {
              return {
                ...extra,
                quantity: extra.quantity + 1
              }
            } else {
              return extra
            }
          })
        }
      }
    },
    decreaseExtra: (state: any, { payload }: any) => {
      const { id } = payload
      const findExtra = state.extras?.find((extra: any) => extra.id === id)

      if (findExtra && findExtra.quantity > 0) {
        return {
          ...state,
          extras: state.extras.map((extra: any) => {
            if (extra.id === id) {
              return {
                ...extra,
                quantity: extra.quantity >= 1 ? extra.quantity - 1 : 0
              }
            } else {
              return extra
            }
          })
        }
      }
    },
    resetTicket() {
      return {
        ...initialState
      }
    }
  }
})

export const { addTicket, addExtra, decreaseExtra, resetTicket } = ticketSlice.actions
const ticketReducer = ticketSlice.reducer
export default ticketReducer
