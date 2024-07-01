import logo from './logo.svg';
import './App.css';
import AddCard from './Components/Add-Card/add-card';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';


function App() {
  const [newCard, setNewCard] = useState([])

  const addCards = newCard.map((card) => {
    console.log(card);
    const cardStyle = card.backGroundCard
    return (
      <div style={cardStyle} className='card_ui'>
        <div className='logo_card'><span>{card.cardName}</span> <span>{card.imageUrl}</span></div>
        <div>{card.cardNumber}</div>
        <div>Cvv2 {card.cvv2}</div>
        <div>
          <span>{card.cardYear}</span>
          <span> / {card.cardMonth}</span>
        </div>
        <div>{card.cardAmount}</div>
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
            <NavLink clas className="link_cards">&#128179;</NavLink>
            <NavLink clas className="link_cards">&#128176;</NavLink>
            <NavLink clas className="link_cards">&#128260;</NavLink>
          </div>
        </div>
        <div className='card_details'>
          <Routes>
            <Route path='/' element={<AddCard newCard={newCard} setNewCard={setNewCard} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
