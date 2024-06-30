import './add-card.css'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AddCard({ newCard, setNewCard }) {

  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cvv2, setCvv2] = useState('')
  const [cardYear, setCardYear] = useState('')
  const [cardMonth, setCardMonth] = useState('')
  const [cardAmount, setCardAmount] = useState('')
  const [cardLength, setCardLength] = useState(16)
  const yearArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const bankCode = [
    {bankName: 'saderat', code:603769, url:'saderat.png.jpeg'}
  ]


  const fixNumberHandler = (event) => {

    if (event.target.value.length == 0 && event.which == 48 || event.target.value.length == 0 && event.which == 96) {
      event.preventDefault();
    } else {
      if (event.which == 46 && event.which == 8 && event.which < 48 || event.which > 57 && event.which < 96 || event.which > 105) {
        event.preventDefault();
      }
    }
  }

  const fixTextHandler = (event) => {
    if (event.which !== 46 && event.which !== 8 && event.which !== 37 && event.which !== 39 && event.which < 65 || event.which > 90) {
      event.preventDefault()
    }
  }

  const numberYearHandler = (event) => {
    if (event.which == 46 && event.which == 8 && event.which < 48 || event.which > 57 && event.which < 96 || event.which > 105) {
      event.preventDefault()
    }
  }

  const numberMonthHandler = (event) => {
    if (event.which == 46 && event.which == 8 && event.which < 48 || event.which > 57 && event.which < 96 || event.which > 105) {
      event.preventDefault()
    }
  }

  const cardNameHandler = (event) => {
    setCardName(event.target.value)
  }

  const cardNumberHandler = (event) => {
    setCardNumber(event.target.value)
    setCardLength(16 - event.target.value.length)
  }

  const cvvHandler = (event) => {
    setCvv2(event.target.value)
  }

  const yearHandler = (event) => {
    if (event.target.value > 11 || event.target.value == '00') {
      event.target.value = ''
    }
    setCardYear(event.target.value)
  }

  const yearFixnum = (event) => {
    if (event.target.value.length == 1 && event.target.value < 10 && event.target.value !== '') {
      event.target.value = `0${event.target.value}`
    }
    setCardYear(event.target.value)
  }

  const monthHandler = (event) => {
    if (event.target.value > 12 || event.target.value == '00') {
      event.target.value = ''
    }
    setCardMonth(event.target.value)
  }

  const monthFixnum = (event) => {
    if (event.target.value.length == 1 && event.target.value < 10 && event.target.value !== '') {
      event.target.value = `0${event.target.value}`
    }
    setCardMonth(event.target.value)
  }

  const amountHandler = (event) => {
    setCardAmount(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
  }


  const addCardHandler = () => {
    if (!cardName || cardNumber.length < 16 || cvv2.length < 4 || !cardYear || !cardMonth || cardAmount.length < 4) {
      const notify = () => toast.error("Pleas Fill All Inputs");
      notify()
    } else {
      const newObjCard = {
        cardName: cardName,
        cardNumber: cardNumber,
        cvv2: cvv2,
        cardYear: cardYear,
        cardMonth: cardMonth,
        cardAmount: cardAmount
      }
      setNewCard([...newCard, newObjCard])
    }
  }


  return (
    <div>
      <form onSubmit={submitHandler} action="">
        <div>
          <input maxLength={20} onKeyDown={fixTextHandler} onChange={cardNameHandler} placeholder='Card Name' className='card_inp' type="text" />
          <div className='card_number_inp_container'>
            <input maxLength={16} onKeyDown={fixNumberHandler} onChange={cardNumberHandler} placeholder='Card Number' className='card_inp card_number_inp' type="text" />
            <span className='card_number_length'>{cardLength}</span>
          </div>
        </div>
        <div className='card_number_container'>
          <input maxLength={4} onKeyDown={fixNumberHandler} onChange={cvvHandler} placeholder='CVV2' className='card_number cvv_card' type="text" />
          <input onBlur={yearFixnum} maxLength={2} onKeyDown={numberYearHandler} onChange={yearHandler} placeholder='YY' className='card_number year_card' type="text" />
          <input onBlur={monthFixnum} maxLength={2} onKeyDown={numberMonthHandler} onChange={monthHandler} placeholder='MM' className='card_number month_card' type="text" />
        </div>
        <div>
          <input maxLength={10} onKeyDown={fixNumberHandler} onChange={amountHandler} placeholder='Amount' className='card_inp' type="text" />
        </div>
        <div>
          <button onClick={addCardHandler} className='Add_card_btn'>Add Card</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}
