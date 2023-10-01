import React from "react";
import './Game.css'
import Table from "./Table";
import { calculateWinner } from "../settings";


const Game = () => {
    const [board, setBoard] = React.useState(Array(9).fill(null));
    const [sign, setSign] = React.useState(true);
    const winner = calculateWinner(board);
    const isBoardFull = board.every(square => square !== null);

    const getSign = (index) => {
     const boardCopy = [...board]

     if (winner || boardCopy[index] || isBoardFull) return

     boardCopy[index] = sign ?  'X' : 'O'

     setBoard(boardCopy)
     setSign(!sign)
    }

    const startNewGame = () => {
        return (
            <button className="restart-game" onClick={() => {
                setSign(true)
                setBoard(Array(9).fill(null))
            }}>Начать заново</button>
        )
    }

    
    return (
        <main className="main-place">
            <Table squares={board} click={getSign}/>
            {startNewGame()}
            <p className="winner">
                {winner ? 'Победитель ' + winner :isBoardFull ? 'Ничья' : 'Сейчас ходит ' + (sign ? 'X' : 'O')}
            </p>
        </main>
    )
}

export default Game;