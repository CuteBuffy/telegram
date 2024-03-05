import react, { useState } from 'react'

import Card from './components/Card/Card.jsx'
import Nav from './components/Nav/Nav.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'
import './components/Card/Card.css'
import './components/Nav/Nav.css'
import './components/Footer/Footer.css'

// JS DATA //

import cardData from './javascript/data.js'

// APP //

function App() {

  const [data, setData] = useState(cardData)

  const cardElement = data.map(item => {
    return (
      <Card
        key={item.id}
        img={item.img}
        title={item.title}
        boldDesc={item.boldDesc}
        firstPart={item.first_part}
        lastPart={item.last_part} />
    )
  })

  return (
    <>
      <Nav />
      <div className="container cards__container">
        <h1 className='cards__title'>Девять причин пользоваться Telegram</h1>
        <div className="cards__wrapper">
          {cardElement}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
