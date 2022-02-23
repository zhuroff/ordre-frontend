import { UserData } from 'types/UserTypes'

export default class UserDTO implements UserData {
  id: string = ''
  email: string = ''

  constructor({ id, email }: UserData) {
    this.id = id
    this.email = email
  }
}