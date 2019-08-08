import React, { useState } from 'react';
import Display from './Display';

export default function Dashboard() {
    const [balls, setBalls] = useState(0)
    const [strikes, setStrikes] = useState(0)
    const [hits, setHits] = useState(0)

    const ballsAdd = () => {
        if (balls < 4) {
            setBalls(balls + 1)
        }else{
            setBalls(0)
        }
    }
    const strikesAdd = () => {
        if (strikes < 3) {
            setStrikes(strikes + 1);
        }else{
            setStrikes(0);
        }
    }
    const foulsAdd = () => {
        if (strikes === 0) {
            setStrikes(1)
        }else if (strikes === 1) {
            setStrikes(2)
        }else{
            setStrikes(strikes)
        }
    }
    const hitsAdd = () => {
        setHits(hits + 1)
    }
    

    return (
        <div className='dashboard'>
            <h1>ScoreBoard</h1>
            <Display
                balls={balls}
                setBalls={setBalls}
                strikes={strikes}
                setStrikes={setStrikes}
                hits={hits}
                setHits={setHits} />
            <div>
                <button onClick={() => hitsAdd()}>Hit</button>
                <button onClick={() => strikesAdd()}>Strike</button>
                <button onClick={() => ballsAdd()}>Ball</button>
                <button onClick={() => foulsAdd()}>Foul</button>
            </div>
        </div>
    )
}

