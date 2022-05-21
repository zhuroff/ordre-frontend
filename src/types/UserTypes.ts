type UserData = {
  email: string
  id: string
}

type UserFullData = UserData & {
  name?: string
}

export type {
  UserData,
  UserFullData
}
