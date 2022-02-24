class Formatter {
  private readonly dateConfig = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  } as const

  localeDate(locale: string, date: string, withConfig?: boolean) {
    return new Date(date)
      .toLocaleDateString(
        `${locale}-${locale.toUpperCase()}`,
        withConfig ? this.dateConfig : {}
      )
  }

  localeDateWithTime(locale: string, date: string) {
    return this.localeDate(locale, date, true)
  }
}

export default new Formatter()
