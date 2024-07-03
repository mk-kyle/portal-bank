import './History.css'

export default function History({ arrayHistory }) {

    console.log(arrayHistory);
    let showingHistoty

    if (arrayHistory.length !== 0) {
        showingHistoty = arrayHistory.map((e) => {
            return (
                <div className='history_container'>
                    <div>{e.cardDesImg}</div>
                    <div className='card_number_history_to'>
                        <span>from: {e.cardNumber} </span>
                        <spanp>to: {e.cardDestination} </spanp>
                    </div>
                    <p>Amount: £ {e.payMonydo}</p>
                </div>
            )
        })
    }
    if (arrayHistory.length !== 0) {
        return (
            <div className='history_container_ui'>
                <div className='showing_history'>{showingHistoty}</div>
            </div>
        )
    } else {
        return (
            <div className='no_history'>No History</div>
        )
    }

}
