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

  return (
    <>
      <Nav />
      <div className="container cards__container">
        <h1 className='cards__title'>Девять причин пользоваться Telegram</h1>
        <div className="cards__wrapper">
          <Card
            key={data[0].id}
            img={data[0].img}
            title={data[0].title}
            boldDesc={data[0].boldDesc}
            firstPart={data[0].first_part}
            lastPart={data[0].last_part} />
          <Card
            key={data[1].id}
            img={data[1].img}
            title={data[1].title}
            boldDesc={data[1].boldDesc}
            firstPart={data[1].first_part}
            lastPart={data[1].last_part} />
          <Card
            key={data[2].id}
            img={data[2].img}
            title={data[2].title}
            boldDesc={data[2].boldDesc}
            firstPart={data[2].first_part}
            lastPart={data[2].last_part} />
          <Card
            key={data[3].id}
            img={data[3].img}
            title={data[3].title}
            boldDesc={data[3].boldDesc}
            firstPart={data[3].first_part}
            lastPart={data[3].last_part} />
          <Card
            key={data[4].id}
            img={data[4].img}
            title={data[4].title}
            boldDesc={data[4].boldDesc}
            firstPart={data[4].first_part}
            lastPart={data[4].last_part} />
          <Card
            key={data[5].id}
            img={data[5].img}
            title={data[5].title}
            boldDesc={data[5].boldDesc}
            firstPart={data[5].first_part}
            lastPart={data[5].last_part} />
          <Card
            key={data[6].id}
            img={data[6].img}
            title={data[6].title}
            boldDesc={data[6].boldDesc}
            firstPart={data[6].first_part}
            lastPart={data[6].last_part} />
          <Card
            key={data[7].id}
            img={data[7].img}
            title={data[7].title}
            boldDesc={data[7].boldDesc}
            firstPart={data[7].first_part}
            lastPart={data[7].last_part} />
          <Card
            key={data[8].id}
            img={data[8].img}
            title={data[8].title}
            boldDesc={data[8].boldDesc}
            firstPart={data[8].first_part}
            lastPart={data[8].last_part} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
