import React from 'react';
import { Button } from '../Button/Button.jsx';
import './ButtonsGrid.css'

export function ButtonsGrid({calculatorFunctions}) {

    const {clear, addNumber, addition, equal} = calculatorFunctions;

    function handleAddNumber(value) {
        addNumber(value);
    } 

    return <div className='ButtonsGrid container h-75 m-1'>

        <div className="row">

            <div className="col-3 p-1 h-auto">
                <Button symbol={'%'}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'CE'} onExecute={clear}/>
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
                <Button symbol={'7'} onExecute={() => handleAddNumber(7)}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'8'} onExecute={() => handleAddNumber(8)}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'9'} onExecute={() => handleAddNumber(9)}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'x'}/>
            </div>
            
        </div>

        <div className="row">

            <div className="col-3 p-1 h-auto">
                <Button symbol={'4'} onExecute={() => handleAddNumber(4)}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'5'} onExecute={() => handleAddNumber(5)}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'6'} onExecute={() => handleAddNumber(6)}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'-'}/>
            </div>
            
        </div>

        <div className="row">

            <div className="col-3 p-1 h-auto">
                <Button symbol={'1'} onExecute={() => handleAddNumber(1)}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'2'} onExecute={() => handleAddNumber(2)}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'3'} onExecute={() => handleAddNumber(3)}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'+'} onExecute={addition}/>
            </div>
            
        </div>

        <div className="row">

            <div className="col-3 p-1 h-auto">
                <Button symbol={'+/-'}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'0'} onExecute={() => handleAddNumber(0)}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={','}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'='} onExecute={equal}/>
            </div>
            
        </div>

    </div>
}