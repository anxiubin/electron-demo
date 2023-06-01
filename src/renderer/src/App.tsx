import { useEffect, useState } from 'react'

function App(): JSX.Element {
  const [environmentInfo, setEnvironmentInfo] = useState<string>('')

  const handleSetEnvironmentInfo = async (): Promise<void> => {
    const result = await window.api.getEnvironmentInformation()
    setEnvironmentInfo(result)
  }

  useEffect(() => {
    handleSetEnvironmentInfo()
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
    </div>
  )
}

export default App
