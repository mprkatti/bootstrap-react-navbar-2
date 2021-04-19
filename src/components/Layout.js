import React from 'react'
import Footer from './Footer';
import './layout.css';
import Main from './Main';
import Navbar from './bs-navbar/Navbar';

const Layout = (props) => {
  return (
    <div className="layout">
      <Navbar />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </div>
  )
}

export default Layout
