
export default function Helper({newCard, setPayCard}) {

  const addCardTopay = (cardId) =>{
    newCard.map((card)=>{
      if(card.id == cardId){
        setPayCard(card)
      }
    })
  }

  const addCards = newCard.map((card) => {
    const cardStyle = card.backGroundCard;
    return (
      <div
        onClick={() => addCardTopay(card.id)}
        style={cardStyle}
        className="card_ui">
        <div className="logo_card">
          <span>{card.cardName}</span> <span>{card.imageUrl}</span>
        </div>
        <div>{card.cardNumber}</div>
        <div>Cvv2 {card.cvv2}</div>
        <div>
          <span>{card.cardYear}</span>
          <span> / {card.cardMonth}</span>
        </div>
        <div>£ {card.cardAmount}</div>
      </div>
    );
  });
  return (
    addCards
  )
}
