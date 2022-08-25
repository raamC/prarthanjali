import React from "react"
import "../styles/index.scss"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
       <main>{children}</main>
       <Footer />
      
    </>
  )
}

export default Layout
