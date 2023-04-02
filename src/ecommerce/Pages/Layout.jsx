import { Outlet } from "react-router-dom";
import {Header,Footer,NewsLetter} from "../Components";
import React from 'react'

export const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

