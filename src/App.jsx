import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes'

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
