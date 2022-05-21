import { runInAction, makeAutoObservable } from 'mobx'
import { Authentication } from 'types/AuthTypes'
import { UserData } from 'types/UserTypes'
import AuthService from 'services/AuthService'
import user from './user'

class AuthStore {
  isAuthenticated = false
  isAuthChecked = false

  constructor() {
    makeAutoObservable(this)
  }

  checkAuth() {
    if (localStorage.getItem('token')) {
      AuthService.checkIsAuthenticated()
        .then((data) => {
          runInAction(() => {
            user.setUser(data)
            this.isAuthenticated = true
            this.isAuthChecked = true
          })
        })
        .catch(_ => {
          runInAction(() => {
            user.setUser({} as UserData)
            this.isAuthenticated = false
            this.isAuthChecked = true
          })
        })
    } else {
      runInAction(() => {
        this.isAuthenticated = false
        this.isAuthChecked = true
      })
    }
  }

  login({ email, password }: Authentication) {
    AuthService.login({ email, password })
      .then((data) => {
        runInAction(() => {
          this.isAuthenticated = true
          this.isAuthChecked = true
          // user.setUser(data)
        })
      })
      .catch((error) => console.dir(error))
  }
}

export default new AuthStore()
