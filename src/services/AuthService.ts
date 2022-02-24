import api from 'api'
import axios from 'axios'
import UserDTO from 'dtos/UserDTO'
import { Authentication } from 'types/AuthTypes'
import { UserData } from 'types/UserTypes'

type LoginResponse = {
  accessToken: string
  refreshToken: string
  user: UserData
}

export default class AuthService {
  static async registration({ email, password }: Authentication) {
    const response = await api.post('auth/registration', { email, password })
    return response
  }

  static async login({ email, password }: Authentication): Promise<UserDTO> {
    const response = await api.post<LoginResponse>('auth/login', { email, password })
    
    if (response?.status === 200) {
      localStorage.setItem('token', response.data.accessToken)
      return new UserDTO(response.data.user)
    }

    localStorage.removeItem('token')
    throw new Error()
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
