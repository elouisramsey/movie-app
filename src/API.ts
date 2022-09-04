/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  points: number,
  watched: number,
  Image: string,
  tickets?: Array< string | null > | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  points?: ModelIntInput | null,
  watched?: ModelIntInput | null,
  Image?: ModelStringInput | null,
  tickets?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  email: string,
  points: number,
  watched: number,
  Image: string,
  tickets?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  points?: number | null,
  watched?: number | null,
  Image?: string | null,
  tickets?: Array< string | null > | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateTicketsInput = {
  id?: string | null,
  name: string,
  Image: string,
  theatre: string,
  date: string,
  seat: string,
  time: string,
  reference: string,
  extras?: string | null,
};

export type ModelTicketsConditionInput = {
  name?: ModelStringInput | null,
  Image?: ModelStringInput | null,
  theatre?: ModelStringInput | null,
  date?: ModelStringInput | null,
  seat?: ModelStringInput | null,
  time?: ModelStringInput | null,
  reference?: ModelStringInput | null,
  extras?: ModelStringInput | null,
  and?: Array< ModelTicketsConditionInput | null > | null,
  or?: Array< ModelTicketsConditionInput | null > | null,
  not?: ModelTicketsConditionInput | null,
};

export type Tickets = {
  __typename: "Tickets",
  id: string,
  name: string,
  Image: string,
  theatre: string,
  date: string,
  seat: string,
  time: string,
  reference: string,
  extras?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTicketsInput = {
  id: string,
  name?: string | null,
  Image?: string | null,
  theatre?: string | null,
  date?: string | null,
  seat?: string | null,
  time?: string | null,
  reference?: string | null,
  extras?: string | null,
};

export type DeleteTicketsInput = {
  id: string,
};

export type CreateExtrasInput = {
  name: string,
  qty: number,
  id?: string | null,
};

export type ModelExtrasConditionInput = {
  name?: ModelStringInput | null,
  qty?: ModelIntInput | null,
  and?: Array< ModelExtrasConditionInput | null > | null,
  or?: Array< ModelExtrasConditionInput | null > | null,
  not?: ModelExtrasConditionInput | null,
};

export type Extras = {
  __typename: "Extras",
  name: string,
  qty: number,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateExtrasInput = {
  name?: string | null,
  qty?: number | null,
  id: string,
};

export type DeleteExtrasInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  points?: ModelIntInput | null,
  watched?: ModelIntInput | null,
  Image?: ModelStringInput | null,
  tickets?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelTicketsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  Image?: ModelStringInput | null,
  theatre?: ModelStringInput | null,
  date?: ModelStringInput | null,
  seat?: ModelStringInput | null,
  time?: ModelStringInput | null,
  reference?: ModelStringInput | null,
  extras?: ModelStringInput | null,
  and?: Array< ModelTicketsFilterInput | null > | null,
  or?: Array< ModelTicketsFilterInput | null > | null,
  not?: ModelTicketsFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelTicketsConnection = {
  __typename: "ModelTicketsConnection",
  items:  Array<Tickets | null >,
  nextToken?: string | null,
};

export type ModelExtrasFilterInput = {
  name?: ModelStringInput | null,
  qty?: ModelIntInput | null,
  and?: Array< ModelExtrasFilterInput | null > | null,
  or?: Array< ModelExtrasFilterInput | null > | null,
  not?: ModelExtrasFilterInput | null,
};

export type ModelExtrasConnection = {
  __typename: "ModelExtrasConnection",
  items:  Array<Extras | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  points?: ModelSubscriptionIntInput | null,
  watched?: ModelSubscriptionIntInput | null,
  Image?: ModelSubscriptionStringInput | null,
  tickets?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionTicketsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  Image?: ModelSubscriptionStringInput | null,
  theatre?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  seat?: ModelSubscriptionStringInput | null,
  time?: ModelSubscriptionStringInput | null,
  reference?: ModelSubscriptionStringInput | null,
  extras?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTicketsFilterInput | null > | null,
  or?: Array< ModelSubscriptionTicketsFilterInput | null > | null,
};

export type ModelSubscriptionExtrasFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  qty?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionExtrasFilterInput | null > | null,
  or?: Array< ModelSubscriptionExtrasFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    points: number,
    watched: number,
    Image: string,
    tickets?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    points: number,
    watched: number,
    Image: string,
    tickets?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    points: number,
    watched: number,
    Image: string,
    tickets?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTicketsMutationVariables = {
  input: CreateTicketsInput,
  condition?: ModelTicketsConditionInput | null,
};

export type CreateTicketsMutation = {
  createTickets?:  {
    __typename: "Tickets",
    id: string,
    name: string,
    Image: string,
    theatre: string,
    date: string,
    seat: string,
    time: string,
    reference: string,
    extras?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTicketsMutationVariables = {
  input: UpdateTicketsInput,
  condition?: ModelTicketsConditionInput | null,
};

export type UpdateTicketsMutation = {
  updateTickets?:  {
    __typename: "Tickets",
    id: string,
    name: string,
    Image: string,
    theatre: string,
    date: string,
    seat: string,
    time: string,
    reference: string,
    extras?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTicketsMutationVariables = {
  input: DeleteTicketsInput,
  condition?: ModelTicketsConditionInput | null,
};

export type DeleteTicketsMutation = {
  deleteTickets?:  {
    __typename: "Tickets",
    id: string,
    name: string,
    Image: string,
    theatre: string,
    date: string,
    seat: string,
    time: string,
    reference: string,
    extras?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateExtrasMutationVariables = {
  input: CreateExtrasInput,
  condition?: ModelExtrasConditionInput | null,
};

export type CreateExtrasMutation = {
  createExtras?:  {
    __typename: "Extras",
    name: string,
    qty: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateExtrasMutationVariables = {
  input: UpdateExtrasInput,
  condition?: ModelExtrasConditionInput | null,
};

export type UpdateExtrasMutation = {
  updateExtras?:  {
    __typename: "Extras",
    name: string,
    qty: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteExtrasMutationVariables = {
  input: DeleteExtrasInput,
  condition?: ModelExtrasConditionInput | null,
};

export type DeleteExtrasMutation = {
  deleteExtras?:  {
    __typename: "Extras",
    name: string,
    qty: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    points: number,
    watched: number,
    Image: string,
    tickets?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      points: number,
      watched: number,
      Image: string,
      tickets?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTicketsQueryVariables = {
  id: string,
};

export type GetTicketsQuery = {
  getTickets?:  {
    __typename: "Tickets",
    id: string,
    name: string,
    Image: string,
    theatre: string,
    date: string,
    seat: string,
    time: string,
    reference: string,
    extras?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTicketsQueryVariables = {
  id?: string | null,
  filter?: ModelTicketsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTicketsQuery = {
  listTickets?:  {
    __typename: "ModelTicketsConnection",
    items:  Array< {
      __typename: "Tickets",
      id: string,
      name: string,
      Image: string,
      theatre: string,
      date: string,
      seat: string,
      time: string,
      reference: string,
      extras?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetExtrasQueryVariables = {
  id: string,
};

export type GetExtrasQuery = {
  getExtras?:  {
    __typename: "Extras",
    name: string,
    qty: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListExtrasQueryVariables = {
  filter?: ModelExtrasFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExtrasQuery = {
  listExtras?:  {
    __typename: "ModelExtrasConnection",
    items:  Array< {
      __typename: "Extras",
      name: string,
      qty: number,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    points: number,
    watched: number,
    Image: string,
    tickets?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    points: number,
    watched: number,
    Image: string,
    tickets?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    points: number,
    watched: number,
    Image: string,
    tickets?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTicketsSubscriptionVariables = {
  filter?: ModelSubscriptionTicketsFilterInput | null,
};

export type OnCreateTicketsSubscription = {
  onCreateTickets?:  {
    __typename: "Tickets",
    id: string,
    name: string,
    Image: string,
    theatre: string,
    date: string,
    seat: string,
    time: string,
    reference: string,
    extras?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTicketsSubscriptionVariables = {
  filter?: ModelSubscriptionTicketsFilterInput | null,
};

export type OnUpdateTicketsSubscription = {
  onUpdateTickets?:  {
    __typename: "Tickets",
    id: string,
    name: string,
    Image: string,
    theatre: string,
    date: string,
    seat: string,
    time: string,
    reference: string,
    extras?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTicketsSubscriptionVariables = {
  filter?: ModelSubscriptionTicketsFilterInput | null,
};

export type OnDeleteTicketsSubscription = {
  onDeleteTickets?:  {
    __typename: "Tickets",
    id: string,
    name: string,
    Image: string,
    theatre: string,
    date: string,
    seat: string,
    time: string,
    reference: string,
    extras?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateExtrasSubscriptionVariables = {
  filter?: ModelSubscriptionExtrasFilterInput | null,
};

export type OnCreateExtrasSubscription = {
  onCreateExtras?:  {
    __typename: "Extras",
    name: string,
    qty: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateExtrasSubscriptionVariables = {
  filter?: ModelSubscriptionExtrasFilterInput | null,
};

export type OnUpdateExtrasSubscription = {
  onUpdateExtras?:  {
    __typename: "Extras",
    name: string,
    qty: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteExtrasSubscriptionVariables = {
  filter?: ModelSubscriptionExtrasFilterInput | null,
};

export type OnDeleteExtrasSubscription = {
  onDeleteExtras?:  {
    __typename: "Extras",
    name: string,
    qty: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
