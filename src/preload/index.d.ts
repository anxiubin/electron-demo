import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      getEnvironmentInformation: () => Promise<string>
      checkNetworkStatus: () => Promise<boolean>
      writeHelloWorldTextFile: () => Promise<string>
      readHelloWorldTextFile: () => Promise<string>
      crawlPokemon: () => Promise<string[]>
    }
  }
}
