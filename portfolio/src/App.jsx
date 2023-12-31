import { useState } from 'react'
import Header from './Componement/1-Header/Header'
import Hero from './Componement/2-Hero/Hero'
import Main from './Componement/3-Main/Main'
import Contact from './Componement/4-Contact/Contact'
import Footer from './Componement/5-Footer/Footer'


function App() {
  return (
    <div className='container'>
      <Header/>

      <Hero/>
      <div className="divider"></div>
      <Main/>
      <div className="divider"></div>
      <Contact/>
      <div className="divider"></div>
      <Footer/>

    </div>
  )
}

export default App
