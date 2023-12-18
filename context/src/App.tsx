import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeProvider from './providers/ThemeProvider'
import ThemedComponent from './components/ThemedComponent'
import ThemeContainer from './components/ThemedContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

          <ThemedComponent />
          <ThemedComponent />
          <ThemedComponent />

    </>
  )
}

export default App
