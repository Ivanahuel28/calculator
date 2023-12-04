import React, { useState } from 'react';
import './Display.css'

export function Display({value, onChange}) {

    return <input 
        className='Display'
        placeholder="Ingrese números"
        type="text"
        inputMode='numeric'
        value={value}
        onChange={onChange}
        />
}