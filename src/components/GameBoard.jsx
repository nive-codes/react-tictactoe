
export default function GameBoard({onSelectSquare, board}){



    return <ol id="game-board">
        {/* gameBoard로 해야 변경된 상태값이 계속해서 유지가 되고 있음 */}
        {/* {initialGameBoard.map((row, rowIndex) => <li key={rowIndex}> */}
        {board.map((row, rowIndex) => <li key={rowIndex}>       
            <ol>
                {row.map((playerSymbol, colIndex) =>
                     <li key={colIndex}>
                        <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                            {playerSymbol}
                            </button>
                        </li>)}
            </ol>
        </li>)}
        
    </ol>
}