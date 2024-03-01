import React from 'react';
import { Button } from '../Button/Button.jsx';
import './ButtonsGrid.css'

export function ButtonsGrid({calculatorFunctions}) {

    const {clear, addSimbol, equal, backspace} = calculatorFunctions;

    function handleAddSimbol(value) {
        addSimbol(value);
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
                <Button symbol={'C'} onExecute={clear}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'backspace.png'} onExecute={backspace}/>
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
                <Button symbol={'/'} onExecute={() => handleAddSimbol('/')}/>
            </div>
            
        </div>

        <div className="row">

            <div className="col-3 p-1 h-auto">
                <Button symbol={'7'} onExecute={() => handleAddSimbol('7')}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'8'} onExecute={() => handleAddSimbol('8')}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'9'} onExecute={() => handleAddSimbol('9')}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'x'} onExecute={() => handleAddSimbol('*')}/>
            </div>
            
        </div>

        <div className="row">

            <div className="col-3 p-1 h-auto">
                <Button symbol={'4'} onExecute={() => handleAddSimbol('4')}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'5'} onExecute={() => handleAddSimbol('5')}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'6'} onExecute={() => handleAddSimbol('6')}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'-'} onExecute={() => handleAddSimbol('-')}/>
            </div>
            
        </div>

        <div className="row">

            <div className="col-3 p-1 h-auto">
                <Button symbol={'1'} onExecute={() => handleAddSimbol('1')}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'2'} onExecute={() => handleAddSimbol('2')}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'3'} onExecute={() => handleAddSimbol('3')}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'+'} onExecute={() => handleAddSimbol('+')}/>
            </div>
            
        </div>

        <div className="row">

            <div className="col-3 p-1 h-auto">
                <Button symbol={'+/-'}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'0'} onExecute={() => handleAddSimbol('0')}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={','} onExecute={() => handleAddSimbol('.')}/>
            </div>

            <div className="col-3 p-1 h-auto">
                <Button symbol={'='} onExecute={equal}/>
            </div>
            
        </div>

    </div>
}