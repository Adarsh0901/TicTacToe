import React, { useState, useEffect } from 'react'
import TicTacToeScreen from "./TicTacToeScreen";
import './TicTacToe.css'

const clearstate = ["", "", "", "", "", "", "", "", ""]

const TicTacToe = () => {
    const [input, setInput] = useState(clearstate)
    const [isXturn, setIsXturn] = useState(true)

    const handleClick = (index) =>{
        let string = Array.from(input)
        if(string[index]){
            return
        }

        string[index] = isXturn ? 'X' : 'O';
        setIsXturn(!isXturn)
        setInput(string)
    }

    const clearStates = () =>{
        setInput(clearstate);
    }


    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (input[a] && input[a] === input[b] && input[a] === input[c]) {
                return input[a];
            }
        }
        return null;
    }

    useEffect(() => {
        let winner = checkWinner();
        if(winner){
            clearStates()
            alert(`Player ${winner} wins the game`)
        }
        
    }, [input])

    
    return (
        <>
            <div className="Mainpage jc-center">
                <p className="Heading">Tic Tac Toe Game</p>
                <div className="Screen">
                    <div className="Row">
                        <TicTacToeScreen className="border-down-right" state={input[0]} onClick={()=>handleClick(0)} />
                        <TicTacToeScreen className="border-down-right" state={input[1]} onClick={()=>handleClick(1)} />
                        <TicTacToeScreen className="border-down" state={input[2]} onClick={()=>handleClick(2)} />
                    </div>
                    <div className="Row">
                        <TicTacToeScreen className="border-down-right" state={input[3]} onClick={()=>handleClick(3)} />
                        <TicTacToeScreen className="border-down-right" state={input[4]} onClick={()=>handleClick(4)} />
                        <TicTacToeScreen className="border-down" state={input[5]} onClick={()=>handleClick(5)} />
                    </div>
                    <div className="Row">
                        <TicTacToeScreen className="border-right" state={input[6]} onClick={()=>handleClick(6)} />
                        <TicTacToeScreen className="border-right" state={input[7]} onClick={()=>handleClick(7)} />
                        <TicTacToeScreen state={input[8]} onClick={()=>handleClick(8)} />
                    </div>
                </div>
                <div className="ClearState jc-center">
                    <button onClick={()=> clearStates()}>Clear States</button>
                </div>
            </div>   
        </>
    )
}

export default TicTacToe
