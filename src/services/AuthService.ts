import api from 'api'
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
      return new UserDTO(response.data.user)
    }

    throw new Error()
  }
}
