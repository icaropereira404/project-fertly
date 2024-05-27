import React from 'react'
import './Layout.module.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

const Layout = ({ children }) => {

    const location = useLocation()

    return (
        <main>{(location.pathname !== '/login' && location.pathname !== '/register') 
        && <Navbar />} {children} 
        {(location.pathname !== '/login' && location.pathname !== '/register') && <Footer />}</main>
    )
}
export default Layout