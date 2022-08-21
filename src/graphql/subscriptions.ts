/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      email
      points
      watched
      Image
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      email
      points
      watched
      Image
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      email
      points
      watched
      Image
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTickets = /* GraphQL */ `
  subscription OnCreateTickets($filter: ModelSubscriptionTicketsFilterInput) {
    onCreateTickets(filter: $filter) {
      id
      name
      Image
      theatre
      date
      seat
      time
      reference
      extras
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTickets = /* GraphQL */ `
  subscription OnUpdateTickets($filter: ModelSubscriptionTicketsFilterInput) {
    onUpdateTickets(filter: $filter) {
      id
      name
      Image
      theatre
      date
      seat
      time
      reference
      extras
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTickets = /* GraphQL */ `
  subscription OnDeleteTickets($filter: ModelSubscriptionTicketsFilterInput) {
    onDeleteTickets(filter: $filter) {
      id
      name
      Image
      theatre
      date
      seat
      time
      reference
      extras
      createdAt
      updatedAt
    }
  }
`;
export const onCreateExtras = /* GraphQL */ `
  subscription OnCreateExtras($filter: ModelSubscriptionExtrasFilterInput) {
    onCreateExtras(filter: $filter) {
      name
      qty
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateExtras = /* GraphQL */ `
  subscription OnUpdateExtras($filter: ModelSubscriptionExtrasFilterInput) {
    onUpdateExtras(filter: $filter) {
      name
      qty
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteExtras = /* GraphQL */ `
  subscription OnDeleteExtras($filter: ModelSubscriptionExtrasFilterInput) {
    onDeleteExtras(filter: $filter) {
      name
      qty
      id
      createdAt
      updatedAt
    }
  }
`;
