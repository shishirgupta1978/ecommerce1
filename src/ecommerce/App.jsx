import {Layout, Home,About,Contact,ProductDetail,Shop,Cart,Blog,Login,Register,ForgetPassword } from './Pages'
import {Routes,Route,Navigate} from 'react-router-dom'

import './index.css'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Navigate to="/ecommerce/home"/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="shop" element={<Shop/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="blog" element={<Blog/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="forgetpassword" element={<ForgetPassword/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
