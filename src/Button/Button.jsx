import React from 'react';
import './Button.css';

export function Button({symbol}) {

    if (symbol == '') {
        symbol = <img src='block_white.png' />;
    }else if (symbol.endsWith('png')){
        symbol = <img src = {symbol} />
    }

    return <div className='Button'>
        {symbol}
    </div>
}