import { useState } from 'react'
import Ecommerce from './ecommerce/App'
import {Routes,Route,Navigate} from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate to="/ecommerce" />}/>
      <Route path="/ecommerce/*" element={<Ecommerce/>}/>
    </Routes>
    </>
  )
}

export default App
