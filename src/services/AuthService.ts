import http from 'api'
import axios from 'axios'
import UserDTO from 'dtos/UserDTO'
import { Authentication, RegistrationMap, AuthenticationResponse } from 'types/AuthTypes'
import { UserData } from 'types/UserTypes'

type LoginResponse = {
  accessToken: string
  refreshToken: string
  user: UserData
}

export default class AuthService {
  static async registration(payload: RegistrationMap) {
    const response = await http.post<AuthenticationResponse>('auth/registration', Object.fromEntries(payload.entries()))

    if (response?.status === 201) {
      return response.data
    }

    throw new Error()
  }

  static async login({ email, password }: Authentication) {
    const response = await http.post<AuthenticationResponse>('auth/login', { email, password })
    console.log(response)
    
    // if (response?.status === 200) {
    //   localStorage.setItem('token', response.data.accessToken)
    //   return new UserDTO(response.data.user)
    // }

    // localStorage.removeItem('token')
    // throw new Error()
  }

  static async checkIsAuthenticated(): Promise<UserData> {
    const response = await axios.get<LoginResponse>(
      `${process.env['REACT_APP_SERVER_HOST']}/auth/refresh`,
      { withCredentials: true }
    )

    if (response?.status === 200) {
      localStorage.setItem('token', response.data.accessToken)
      return response.data.user
    }

    localStorage.removeItem('token')
    throw new Error()
  }
}
