
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({onSelectSquare, turns}){
    let gameBoard = initialGameBoard;

    for(const turn of turns){
          const {square, player} = turn;    //squre와 turn을 꺼냄
          const { row, col } = square;  //suqre안에서 row와 col을 꺼냄
          
          gameBoard[row][col] = player;
    }

    // gameboard가 아닌 app.jsx에서 제어하도록. app.jsx에서 상태를 알아야 board, log 핸들링이 가능함.
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];    //메모리에 저장되는 새로운 게임보드로, prevGameBoard의 정보를 모두 가지고 있음.
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     }); //이전 상태를 가진 채로 이동

    //     onSelectSquare();
    // }

    return <ol id="game-board">
        {/* gameBoard로 해야 변경된 상태값이 계속해서 유지가 되고 있음 */}
        {/* {initialGameBoard.map((row, rowIndex) => <li key={rowIndex}> */}
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>       
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