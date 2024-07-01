import './add-card.css'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Maskan from './images/maskan1.png.jpeg'
import Eghtesad from './images/Eghtesad Novin.png.jpeg'
import Ayande from './images/ayande.png.jpeg'
import BlueBank from './images/blue.png.jpeg'
import Gardeshgari from './images/gardeshgari.png.jpeg'
import Keshavarzi from './images/keshavarzi.png.jpeg'
import Markazi from './images/markazi.png.jpeg'
import Melat from './images/melat.png.jpeg'
import Pasargad from './images/pasargad.png.jpeg'
import Persian from './images/persian.png.jpeg'
import Refah from './images/refah.png.jpeg'
import Saderat from './images/saderat.png.jpeg'
import Saman from './images/saman.png.jpeg'
import Sepah from './images/sepah.png.jpeg'
import Tejarat from './images/tejarat.png.jpeg'

export default function AddCard({ newCard, setNewCard }) {

  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cvv2, setCvv2] = useState('')
  const [cardYear, setCardYear] = useState('')
  const [cardMonth, setCardMonth] = useState('')
  const [cardAmount, setCardAmount] = useState('')
  const [cardLength, setCardLength] = useState(16)
  const [imageUrl, setImageUrl] = useState('')
  const [backGroundCard, setBackGroundCard] = useState('')

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
    const fourValue = `${event.target.value[0]}${event.target.value[1]}${event.target.value[2]}${event.target.value[3]}`
    console.log(fourValue);
    const findCode = bankCode.find((code) => fourValue == code.code)
    if (findCode) {
      bankCode.map((code) => {
        if (event.target.value == code.code) {
          setImageUrl(<img className='bank_img' src={code.url} alt="Bank Icon" />)
          setBackGroundCard(code.bg)
        }
      })
    } else {
      setImageUrl('')
      setBackGroundCard('')
    }
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
    if (!imageUrl) {
      const notify = () => toast.error("Your Bank Is Not Available");
      notify()
    } else {
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
          cardAmount: cardAmount,
          imageUrl: imageUrl,
          backGroundCard: backGroundCard
        }
        setNewCard([...newCard, newObjCard])
      }
    }
  }


  return (
    <div>
      <div>
      </div>
      <form onSubmit={submitHandler} action="">
        <div>
          <input maxLength={20} onKeyDown={fixTextHandler} onChange={cardNameHandler} placeholder='Card Name' className='card_inp' type="text" />
          <div className='card_number_inp_container'>
            {imageUrl}<input maxLength={16} onKeyDown={fixNumberHandler} onChange={cardNumberHandler} placeholder='Card Number' className='card_inp card_number_inp' type="text" />
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
