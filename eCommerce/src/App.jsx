import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import { Navbar, Footer, Sidebar } from './components'
import { Home, About, Cart, Products, SingleProduct, Error } from './pages'
import { useState } from 'react'

export default function App() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <BrowserRouter>
      <Navbar setIsOpen={setIsOpen}/>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:id' element={<SingleProduct/>}></Route>
        <Route path='/*' element={<Error/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
