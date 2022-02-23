import { makeAutoObservable } from 'mobx'
import UserDTO from 'dtos/UserDTO'

class UserStore {
  protected email: string = ''
  protected id: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  setUser({ email, id }: UserDTO) {
    this.email = email
    this.id = id
  }
}

export default new UserStore()
