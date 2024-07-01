import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import PayMony from './Components/Pay-Mony/PayMony';
import AddCard from './Components/Add-Card/Add-card';

import Maskan from './Components/Add-Card/images/maskan1.png.jpeg'
import Eghtesad from './Components/Add-Card/images/Eghtesad Novin.png.jpeg'
import Ayande from './Components/Add-Card/images/ayande.png.jpeg'
import BlueBank from './Components/Add-Card/images/blue.png.jpeg'
import Gardeshgari from './Components/Add-Card/images/gardeshgari.png.jpeg'
import Keshavarzi from './Components/Add-Card/images/keshavarzi.png.jpeg'
import Markazi from './Components/Add-Card/images/markazi.png.jpeg'
import Melat from './Components/Add-Card/images/melat.png.jpeg'
import Pasargad from './Components/Add-Card/images/pasargad.png.jpeg'
import Persian from './Components/Add-Card/images/persian.png.jpeg'
import Refah from './Components/Add-Card/images/refah.png.jpeg'
import Saderat from './Components/Add-Card/images/saderat.png.jpeg'
import Saman from './Components/Add-Card/images/saman.png.jpeg'
import Sepah from './Components/Add-Card/images/sepah.png.jpeg'
import Tejarat from './Components/Add-Card/images/tejarat.png.jpeg'


function App() {
  const [newCard, setNewCard] = useState([])
  const [payCard, setPayCard] = useState()

  const bankCode = [
    { bankName: 'Maskan', code: 6280, url: Maskan, bg: { backgroundColor: '#FF9800' } },
    { bankName: 'Eghtesad', code: 6274, url: Eghtesad, bg: { backgroundColor: '#7B1FA2' } },
    { bankName: 'Ayande', code: 6362, url: Ayande, bg: { backgroundColor: '#795548' } },
    { bankName: 'BlueBank', code: 6219, url: BlueBank, bg: { backgroundColor: '#1E88E5' } },
    { bankName: 'Gardeshgari', code: 5055, url: Gardeshgari, bg: { backgroundColor: '#D32F2F' } },
    { bankName: 'Keshavarzi', code: 6392, url: Keshavarzi, bg: { backgroundColor: '#2E7D32' } },
    { bankName: 'Markazi', code: 6367, url: Markazi, bg: { backgroundColor: '#283593' } },
    { bankName: 'Melat', code: 9919, url: Melat, bg: { backgroundColor: '#B71C1C' } },
    { bankName: 'Pasargad', code: 6393, url: Pasargad, bg: { backgroundColor: '#F9A825' } },
    { bankName: 'Persian', code: 6221, url: Persian, bg: { backgroundColor: '#A1887F' } },
    { bankName: 'Refah', code: 5894, url: Refah, bg: { backgroundColor: '#5C6BC0' } },
    { bankName: 'Saderat', code: 6037, url: Saderat, bg: { backgroundColor: '#1A237E' } },
    { bankName: 'Saman', code: 8619, url: Saman, bg: { backgroundColor: '#1E88E5' } },
    { bankName: 'Sepah', code: 5892, url: Sepah, bg: { backgroundColor: '#E57373' } },
    { bankName: 'Tejarat', code: 6273, url: Tejarat, bg: { backgroundColor: '#5C6BC0' } }
]

  const addCardTopay = (cardId) =>{
    newCard.map((card)=>{
      if(card.id == cardId){
        setPayCard(card)
      }
    })
  }

  const addCards = newCard.map((card) => {
    const cardStyle = card.backGroundCard
    return (
      <div onClick={()=>addCardTopay(card.id)} style={cardStyle} className='card_ui'>
        <div className='logo_card'><span>{card.cardName}</span> <span>{card.imageUrl}</span></div>
        <div>{card.cardNumber}</div>
        <div>Cvv2 {card.cvv2}</div>
        <div>
          <span>{card.cardYear}</span>
          <span> / {card.cardMonth}</span>
        </div>
        <div>£ {card.cardAmount}</div>
      </div>
    )
  })

  return (

    <div className="App">
      <Router>
        <div className='card_container'>
          {addCards}
        </div>
        <div className='nav_card'>
          <div className='link_Container'>
            <NavLink to="/" clas className="link_cards">&#128179;</NavLink>
            <NavLink to="/Pay" clas className="link_cards">&#128176;</NavLink>
            <NavLink clas className="link_cards">&#128260;</NavLink>
          </div>
        </div>
        <div className='card_details'>
          <Routes>
            <Route path='/' element={<AddCard newCard={newCard} setNewCard={setNewCard} bankCode={bankCode} />} />
            <Route path='/Pay' element={<PayMony payCard={payCard} setPayCard={setPayCard} newCard={newCard} setNewCard={setNewCard} bankCode={bankCode}/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
