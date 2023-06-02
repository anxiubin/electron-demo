import { useEffect, useState } from 'react'

function App(): JSX.Element {
  const [environmentInfo, setEnvironmentInfo] = useState<string>('')
  const [networkStatus, setNetworkStatus] = useState<boolean>(false)

  const handleSetEnvironmentInfo = async (): Promise<void> => {
    const result = await window.api.getEnvironmentInformation()
    setEnvironmentInfo(result)
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
    </div>
  )
}

export default App
