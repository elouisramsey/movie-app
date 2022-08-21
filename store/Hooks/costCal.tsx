import { createSelector } from '@reduxjs/toolkit'

const totalSelector = (state: any) => state.ticket.seats
const totalExtraSelector = (state: any) => state.ticket.extras

export const totalPriceSelector = createSelector([totalSelector], (item: any) =>
  item
    .filter((item: any) => item.selected)
    .reduce((total: number, current: any) => total + current.amount, 0)
)

export const totalExtraPriceSelector = createSelector(
  [totalExtraSelector],
  (item: any) =>
    item
      .filter((extra: any) => extra.quantity >= 1)
      .reduce(
        (total: number, current: any) =>
          total + current.price * current.quantity,
        0
      )
)

export const totalExtraQty = createSelector([totalExtraSelector], (item: any) =>
  item.reduce((total: number, current: any) => total + current.quantity, 0)
)

export const extrasSelected = createSelector(
  [totalExtraSelector],

  (item: any) =>
    item
      .filter((extra: any) => extra.quantity >= 1)
      .map((item: any) => {
        return {
          name: item.name,
          qty: item.quantity,
        }
      })
)
