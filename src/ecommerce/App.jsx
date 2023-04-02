import { useState } from 'react'
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Project from './routes/Project'
import Layout from './Components/Layout'
import Cart from './routes/Cart'
import Shop from './routes/Shop';
import DetailProduct from './routes/DetailProduct'
import {Routes,Route,Navigate} from 'react-router-dom'
import Blog from './routes/Blog'
import './index.css'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Navigate to="/ecommerce/home"/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="shop" element={<DetailProduct/>}/>
      <Route path="project" element={<Project/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="blog" element={<Blog/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="contact" element={<Contact/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
