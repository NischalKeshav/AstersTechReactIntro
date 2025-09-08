import React from 'react'
import ShowWelcome from '../Exercises/WelcomeMessage'
import Timer from '../Exercises/Timer'
import DataFetcher from '../Exercises/DataFetch.jsx'
import '../../App.css'

function ExercisePage() {
  return (
    <div>
        <ShowWelcome />
        <Timer />
        <DataFetcher />
    </div>
  )
}

export default ExercisePage;