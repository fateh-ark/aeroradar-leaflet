import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainPage, MissingPage } from './routes'


function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='*' element={<MissingPage />} />
      </Routes>
    </>
  )
}

export default App
