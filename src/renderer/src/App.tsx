import { useEffect, useState } from 'react'

function App(): JSX.Element {
  const [environmentInfo, setEnvironmentInfo] = useState<string>('')
  const [networkStatus, setNetworkStatus] = useState<boolean>(false)
  const [fileReadLoading, setFileReadLoading] = useState<boolean>(false)
  const [fileWriteLoading, setFileWriteLoading] = useState<boolean>(false)
  const [fileText, setFileText] = useState<string>('')
  const [filePath, setFilePath] = useState<string>('')

  const handleSetEnvironmentInfo = async (): Promise<void> => {
    const result = await window.api.getEnvironmentInformation()
    setEnvironmentInfo(result)
  }

  const handleClickWriteTmpFile = async (): Promise<void> => {
    setFileWriteLoading(true)
    setFilePath(await window.api.writeHelloWorldTextFile())
    setFileWriteLoading(false)
  }

  const handleClickReadTmpFile = async (): Promise<void> => {
    setFileReadLoading(true)
    setFileText(await window.api.readHelloWorldTextFile())
    setFileReadLoading(false)
  }

  useEffect(() => {
    handleSetEnvironmentInfo()

    const interval = setInterval(async () => {
      const networkStatus = await window.api.checkNetworkStatus()
      setNetworkStatus(networkStatus)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container">
      <section>
        <h1>Environment Information</h1>
        <ul>
          {environmentInfo.split(',').map((el: string) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </section>
      <br />
      <section>
        <h1>Network Status</h1>
        {networkStatus ? (
          <span style={{ color: 'green' }}>Online</span>
        ) : (
          <span style={{ color: 'red' }}>Offline</span>
        )}
      </section>
      <br />
      <section>
        <h1>Read and Write file</h1>
        <button onClick={handleClickWriteTmpFile}>write /tmp file</button>
        <br />
        <button onClick={handleClickReadTmpFile}>read /tmp file</button>
        <p>filePath: {fileWriteLoading ? 'Loading...' : filePath}</p>
        <p>fileText: {fileReadLoading ? 'Loading...' : fileText}</p>
      </section>
    </div>
  )
}

export default App
