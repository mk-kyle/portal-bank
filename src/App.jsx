import logo from './logo.svg';
import './App.css';
import AddCard from './Components/Add-Card/add-card';
import { useState } from 'react';

function App() {
  const [newCard, setNewCard] = useState([])

  const addCards = newCard.map((card) => {
    return (
      <div className='card_ui'>
        <div>{card.cardName}</div>
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
      <div className='card_container'>
        {addCards}
      </div>
      <div className='nav_card'></div>
      <div className='card_details'><AddCard newCard={newCard} setNewCard={setNewCard} /></div>
    </div>
  );
}

export default App;
