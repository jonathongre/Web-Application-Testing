import React from 'react';

export default function Display (props) {
    return (
        <div className='display'>
            <div>
                <h1>HITS</h1>
                <h2>{props.hits}</h2>
            </div>
            <div>
                <h1>BALLS</h1>
                <h2>{props.balls}</h2>
            </div>
            <div>
                <h1>STRIKES</h1>
                <h2>{props.strikes}</h2>
            </div>
            
        </div>
    )
}