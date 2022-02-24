class LocaleStore {
  protected currentLocale = 'ru'

  get current() {
    return this.currentLocale
  }
}

export default new LocaleStore()
