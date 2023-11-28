import React, { useState } from 'react';
import './Display.css'

export function Display({value, onChange}) {

    return <input 
        className='Display'
        type="number"
        inputMode='numeric'
        value={value}
        onChange={onChange}
        />
}