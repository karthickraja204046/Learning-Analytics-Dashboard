// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Chart from './Components/Chart'


// function App() {


//   return (
//     <>
//       <Chart />
//     </>
//   )
// }

// export default App

import './App.css'
import Chart from './Components/Chart'
import { ThemeProvider } from './Components/ThemeProvider'
import DarkModeComponent from './Components/DarkModeComponent'

function App() {
  return (
    <ThemeProvider>
      <DarkModeComponent />
      <Chart />
    </ThemeProvider>
  )
}

export default App
