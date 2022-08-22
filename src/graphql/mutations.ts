/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createTickets = /* GraphQL */ `
  mutation CreateTickets(
    $input: CreateTicketsInput!
    $condition: ModelTicketsConditionInput
  ) {
    createTickets(input: $input, condition: $condition) {
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
export const updateTickets = /* GraphQL */ `
  mutation UpdateTickets(
    $input: UpdateTicketsInput!
    $condition: ModelTicketsConditionInput
  ) {
    updateTickets(input: $input, condition: $condition) {
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
export const deleteTickets = /* GraphQL */ `
  mutation DeleteTickets(
    $input: DeleteTicketsInput!
    $condition: ModelTicketsConditionInput
  ) {
    deleteTickets(input: $input, condition: $condition) {
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
export const createExtras = /* GraphQL */ `
  mutation CreateExtras(
    $input: CreateExtrasInput!
    $condition: ModelExtrasConditionInput
  ) {
    createExtras(input: $input, condition: $condition) {
      name
      qty
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateExtras = /* GraphQL */ `
  mutation UpdateExtras(
    $input: UpdateExtrasInput!
    $condition: ModelExtrasConditionInput
  ) {
    updateExtras(input: $input, condition: $condition) {
      name
      qty
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteExtras = /* GraphQL */ `
  mutation DeleteExtras(
    $input: DeleteExtrasInput!
    $condition: ModelExtrasConditionInput
  ) {
    deleteExtras(input: $input, condition: $condition) {
      name
      qty
      id
      createdAt
      updatedAt
    }
  }
`;
