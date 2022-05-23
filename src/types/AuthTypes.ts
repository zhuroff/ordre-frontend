import { UserFullData } from './UserTypes'

type Authentication = {
  email: string
  password: string
}

type Registration = Authentication & {
  passwordConfirm: string
}

type AuthenticationMap = Map<keyof Authentication, string>

type RegistrationMap = Map<keyof Registration, string>

type AuthenticationResponse = {
  accessToken: string
  refreshToken: string
  user: UserFullData
}

type RegisterErrorResponse = {
  location: string
  msg: string
  param: string
  value: string
}

export type {
  Authentication,
  Registration,
  AuthenticationMap,
  RegistrationMap,
  AuthenticationResponse,
  RegisterErrorResponse
}
