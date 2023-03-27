import React from 'react';
import { Button } from '../Button/Button.jsx';
import './ButtonsGrid.css'

export function ButtonsGrid(props) {
    return <div className='ButtonsGrid container h-75 m-1'>

        <div className="row">

            <div className="col-3 p-1 h-auto">
                <Button symbol={'%'}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'CE'}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'C'}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'backspace.png'}/>
            </div>
            
        </div>

        <div className="row">

            <div className="col-3 p-1 h-auto">
                <Button symbol={''}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={''}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={''}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'/'}/>
            </div>
            
        </div>

        <div className="row">

            <div className="col-3 p-1 h-auto">
                <Button symbol={'7'}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'8'}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'9'}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'x'}/>
            </div>
            
        </div>

        <div className="row">

            <div className="col-3 p-1 h-auto">
                <Button symbol={'4'}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'5'}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'6'}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'-'}/>
            </div>
            
        </div>

        <div className="row">

            <div className="col-3 p-1 h-auto">
                <Button symbol={'1'}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'2'}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'3'}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'+'}/>
            </div>
            
        </div>

        <div className="row">

            <div className="col-3 p-1 h-auto">
                <Button symbol={'+/-'}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'0'}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={','}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'='}/>
            </div>
            
        </div>

    </div>
}