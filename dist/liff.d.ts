declare type Message = any;
interface IProfile {
    userId: string;
    displayName: string;
    pictureUrl: string;
    statusMessage: string;
}
export interface ILiff {
    init(config: {
        liffId: string;
    }, successCallback?: () => void, errorCallback?: () => void): any;
    getOS(): string;
    getLanguage(): string;
    getVersion(): string;
    isInClient(): boolean;
    initPlugins(pluginList: string[]): Promise<void>;
    isLoggedIn(): boolean;
    login(loginConfig?: {
        redirectUri?: string;
    }): any;
    logout(): any;
    getAccessToken(): string;
    getProfile(): Promise<IProfile>;
    sendMessages(messages: Message[]): any;
    openWindow(params: {
        url: string;
        external?: boolean;
    }): any;
    scanCode(): string;
    closeWindow(): any;
}
export {};
