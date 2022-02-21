import api from 'api'
import { Authentication } from 'types/AuthTypes'

export default class AuthService {
  static async registration({ email, password }: Authentication) {
    const response = await api.post('auth/registration', { email, password })
    return response
  }
}
