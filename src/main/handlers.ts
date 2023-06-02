import { IpcMainInvokeEvent } from 'electron'
import { getEnvironmentInformation } from './environment'
import { checkNetworkStatus } from './network'

export const handleGetEnvironmentInformation = (_event: IpcMainInvokeEvent): string => {
  return getEnvironmentInformation()
}

export const handleCheckNetworkStatus = (_event: IpcMainInvokeEvent): boolean => {
  return checkNetworkStatus()
}
