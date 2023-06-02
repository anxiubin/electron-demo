import { IpcMainInvokeEvent } from 'electron'
import { getEnvironmentInformation } from './environment'
import { checkNetworkStatus } from './network'
import { readHelloWorldTextFile, writeHelloWorldTextFile } from './file'

export const handleGetEnvironmentInformation = (_event: IpcMainInvokeEvent): string => {
  return getEnvironmentInformation()
}

export const handleCheckNetworkStatus = (_event: IpcMainInvokeEvent): boolean => {
  return checkNetworkStatus()
}

export const handleWriteHelloWorldTextFile = async (
  _event: IpcMainInvokeEvent
): Promise<string> => {
  return await writeHelloWorldTextFile()
}

export const handleReadHelloWorldTextFile = async (_event: IpcMainInvokeEvent): Promise<string> => {
  return await readHelloWorldTextFile()
}
