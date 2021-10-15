import React from 'react'

const HomeScreen = () => {
    return (
        <div>
            <h1>HOME</h1>
            <a href='/rechargeacc'>
                <button>Recharge</button> </a>

            <a href='/balance'>
                <button>Balance</button> </a>

            <a href='/rechargehistory'>
                <button>Recharge History</button> </a>
        </div>
    )
}

export default HomeScreen
