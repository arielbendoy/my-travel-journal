import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import data from './data'

import './style.css'

export default function App() {
  const card = data.map((item) => {
    return <Main key={item.id} {...item} />
  })
  return (
    <div>
      <Navbar />
      <section>{card}</section>
    </div>
  )
}
