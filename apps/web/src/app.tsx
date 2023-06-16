import { FC, useEffect, useState } from 'react'
import { formatDate } from '@tvb/tools'

export const App: FC = () => {
  const [welcome, setWelcome] = useState<string>('')

  useEffect(() => {
    fetch('/api/welcome').then(async (res: Response) => {
      setWelcome(await res.text())
    })
  }, [])

  return (
    <div>
      <header style={{ textAlign: 'center' }}>{welcome}</header>
      <div style={{ textAlign: 'center', marginTop: 20 }}>{formatDate()}</div>
    </div>
  )
}
