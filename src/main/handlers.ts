import { IpcMainInvokeEvent } from 'electron'
import { getEnvironmentInformation } from './environment'

export const handleGetEnvironmentInformation = (_event: IpcMainInvokeEvent): string => {
  return getEnvironmentInformation()
}
