import { makeAutoObservable } from 'mobx'

class UserStore {
  email: string = ''
  id: string = ''

  constructor() {
    makeAutoObservable(this)
  }
}
