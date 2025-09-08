import { useState } from 'react'
import Hero from '../Hero'
import '../../App.css'
import { useTheme } from '../ThemeContext'
import {TButton} from '../ThemeSwitching'
function CPage() {
  const [count, setCount] = useState(0)

  return (
    <div className={``}>
     <>
        <Hero></Hero>
        
     </>
    </div>
  )
} 

export default CPage;
