/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        points
        watched
        Image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTickets = /* GraphQL */ `
  query GetTickets($id: ID!) {
    getTickets(id: $id) {
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
export const listTickets = /* GraphQL */ `
  query ListTickets(
    $filter: ModelTicketsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getExtras = /* GraphQL */ `
  query GetExtras($id: ID!) {
    getExtras(id: $id) {
      name
      qty
      id
      createdAt
      updatedAt
    }
  }
`;
export const listExtras = /* GraphQL */ `
  query ListExtras(
    $filter: ModelExtrasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExtras(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        qty
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
