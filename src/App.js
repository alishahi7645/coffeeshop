import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Banner from './components/banner/Banner'
import Menu from './components/menu/Menu'
import Whyus from './components/whyus/Whyus'
import Coffeebanner from './components/coffeebaner/Coffeebanner'
import Customer from './components/customer.jsx/Customer'
import NewsLetter from './components/newletter/NewLetter'

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Banner/>
      <Menu/>
      <Whyus/>
      <Coffeebanner/>
      <Customer/>
      <NewsLetter/>
    </div>
  )
}

export default App

