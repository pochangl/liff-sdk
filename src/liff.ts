type Message = any

interface IProfile {
  userId: string
  displayName: string
  pictureUrl: string
  statusMessage: string
}

export interface ILiff {
  init(
    config: { liffId: string },
    successCallback?: () => void,
    errorCallback?: () => void,
  )
  getOS (): string
  getLanguage (): string
  getVersion(): string
  isInClient(): boolean

  // plugins
  initPlugins(pluginList: string[]): Promise<void>

  // authentication
  isLoggedIn(): boolean
  login(
    loginConfig?: {
      redirectUri?: string
    }
  )
  logout()
  getAccessToken(): string

  // profile
  getProfile(): Promise<IProfile>
  sendMessages(messages: Message[])

  // utils
  openWindow(params: {
    url: string,
    external?: boolean
  })
  scanCode(): string
  closeWindow()
}
