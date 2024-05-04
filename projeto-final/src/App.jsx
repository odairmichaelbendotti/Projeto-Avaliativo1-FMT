import { useState } from 'react'
import './App.css'
import { Menu } from './components/Menu'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='containerApp'>
      <div>
        <Menu />
      </div>
      <div className='dashArea'>
      <Outlet />
      </div>
    </div>
  )
}

export default App
