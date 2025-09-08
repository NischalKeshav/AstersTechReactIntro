import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import {TButton} from './components/ThemeSwitching'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={``}>
      <Navbar/>
      <Hero /> {/* Use props here to change the text */}
      <TButton />
    </div>
  )
} 

export default App
