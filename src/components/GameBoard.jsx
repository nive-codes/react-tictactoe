import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard(){
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex){
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];    //메모리에 저장되는 새로운 게임보드로, prevGameBoard의 정보를 모두 가지고 있음.
            updatedBoard[rowIndex][colIndex] = 'X';
            return updatedBoard;
        }); //이전 상태를 가진 채로 이동
    }

    return <ol id="game-board">
        {/* gameBoard로 해야 변경된 상태값이 계속해서 유지가 되고 있음 */}
        {/* {initialGameBoard.map((row, rowIndex) => <li key={rowIndex}> */}
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>       
            <ol>
                {row.map((playerSymbol, colIndex) =>
                     <li key={colIndex}>
                        <button onClick={() => handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                        </li>)}
            </ol>
        </li>)}
        
    </ol>
}