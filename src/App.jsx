import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  )
}

export default App
