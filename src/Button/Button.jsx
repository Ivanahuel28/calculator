import React from 'react';
import './Button.css';



export function Button({symbol}) {

    function handleClick() {
        alert('¡Me hiciste clic en ' + symbol  + "!");
    }

    if (symbol === '') {
        symbol = <img alt='simbolo' src='block_white.png' />;
    } else if (symbol.endsWith('png')) {
        symbol = <img alt='simbolo' src = {symbol} />;
    }

   return <button className='Button' onClick={handleClick}>
        {symbol}
    </button>
}