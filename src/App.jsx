import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Navbar from './Components/Navbar'
import SearchPage from './Pages/SearchPage'
const App = () => {
  return (
    <div className='Content'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Search/:id' element={<SearchPage />} />
      </Routes>
    </div>
  )
}

export default App
