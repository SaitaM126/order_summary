import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="bg-pale-blue flex justify-center  items-center
    bg-desk min-h-screen bg-no-repeat bg-contain font-red-hat">
      <Hero/>
    </main>
  )
}

export default App
