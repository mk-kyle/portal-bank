import './PayMony.css'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'simple-notify/dist/simple-notify.css'


function PayMony({ payCard, setPayCard, newCard, setNewCard, bankCode }) {
    const [imageUrl, setImageUrl] = useState('')
    const [destination, setDestination] = useState(16)
    const [payMonydo, setPayMonydo] = useState()


    const fixNumberHandler = (event) => {
        if (event.target.value.length == 0 && event.which == 48 || event.target.value.length == 0 && event.which == 96) {
            event.preventDefault();
        } else {
            if (event.which == 46 && event.which == 8 && event.which < 48 || event.which > 57 && event.which < 96 || event.which > 105) {
                event.preventDefault();
            }
        }
    }

    const cardImgHandler = (event) => {
        const fourValue = `${event.target.value[0]}${event.target.value[1]}${event.target.value[2]}${event.target.value[3]}`
        const findCode = bankCode.find((code) => fourValue == code.code)
        if (findCode) {
            bankCode.map((code) => {
                if (event.target.value == code.code) {
                    setImageUrl(<img className='bank_img' src={code.url} alt="Bank Icon" />)
                }
            })
        } else {
            setImageUrl('')
        }
        setDestination(16 - event.target.value.length)

    }

    const payMonyDoHandler = (event) => {
        setPayMonydo(event.target.value)
    }


    let setPasswordValue
    const passwordHandler = (event) => {
        
        setPasswordValue = event.target.value
    }

    const payMonyHandler = () => {
        if (imageUrl && destination == 0 && setPasswordValue) {
            if (payCard.cardAmount >= payMonydo) {
                const newCardAmount = payCard.cardAmount - payMonydo
                setPayCard({ ...payCard, cardAmount: newCardAmount })
                const makePayMony = newCard.map((card) => {
                    if (card.id == payCard.id) {
                        return ({ ...card, cardAmount: newCardAmount })
                    } else {
                        return card
                    }
                })
                setNewCard(makePayMony)
            }
        } else {
            const notify = () => toast.error("Pleas Fill All Inputs");
            notify()
        }
    }



    if (payCard) {
        return (
            <div>
                <input value={payCard.cardName} className='pay_inputs' type="text" />
                <div className='pay_card_container'>{payCard.imageUrl}<input value={payCard.cardNumber} className='pay_inputs pay_card_number' type="text" /></div>
                <div className='destination_img_container'>
                    {imageUrl}
                    <input onChange={cardImgHandler} onKeyDown={fixNumberHandler} maxLength={16} placeholder='Destination Card Number' className='pay_inputs pay_card_number' type="text" />
                    <span className='destination_length'>{destination}</span>
                </div>
                <input onKeyDown={passwordHandler} maxLength={20} placeholder='Password' className='pay_inputs' type="password" />
                <input onChange={payMonyDoHandler} maxLength={10} onKeyDown={fixNumberHandler} placeholder='Amount' className='pay_inputs' type="text" />
                <button onClick={payMonyHandler} className='pay_btn'>pay</button>
                <ToastContainer />
            </div>
        )
    } else {
        return (
            <div>
                <input disabled placeholder='card Name' className='pay_inputs' type="text" />
                <input disabled placeholder='card Number' className='pay_inputs card__number' type="text" />
                <input disabled placeholder='Destination Card Number' className='pay_inputs' type="text" />
                <input disabled placeholder='Password' className='pay_inputs' type="password" />
                <input disabled placeholder='Amount' className='pay_inputs' type="text" />
                <button className='pay_btn'>pay</button>
            </div>
        )
    }

}

export default PayMony