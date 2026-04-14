import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/winning-combinations";
import GameOver from "./components/GameOver";


/**
 * 게임판
 */
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];


// 상태를 최소한으로 사용하도록 처리ㅔ
// playser state를 삭제하고 사용할 헬퍼 함수 
function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';
      if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
        currentPlayer = 'O';
  }

  return currentPlayer;
}




function App() {
  const [gameTurns, setGameTurns] = useState([]); //게임 턴을 진행할때마다 배열 생성(log row 추가 느낌)
  // const [hasWinnter, setHasWinner] = useState(false); //사실 불필요. 매번 update될때마다 gameTurns에 있기 때문.
  // const [activePlayer, setActivePlayer] = useState('X'); //gameTurns에 포함되어 있으므로 주석

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  /**
   * gameboard처리
   */
  for(const turn of gameTurns){
        const {square, player} = turn;    //squre와 turn을 꺼냄
        const { row, col } = square;  //suqre안에서 row와 col을 꺼냄
        
        gameBoard[row][col] = player;
  }

  let winner = null;

  //우승 검토 처리
  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];


    if(firstSquareSymbol
      && firstSquareSymbol === secondSquareSymbol 
      && firstSquareSymbol === thirdSquareSymbol){

     winner = firstSquareSymbol;     
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;



  function handleSelectSquare(rowIndex, colIndex){
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X') //기존 사용자 확인
    setGameTurns(prevTurns => {

      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square: {row: rowIndex, col: colIndex},player: currentPlayer},
        ...prevTurns];

        return updatedTurns;
    });
  }

  return <main>
    <div id="game-container">
      {/* PLAYERS */}
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbole="X" isActive={activePlayer === 'X'}/>
        <Player initialName="Player 2" symbole="O" isActive={activePlayer === 'O'}/>
      </ol>

      
      {(winner || hasDraw) && <GameOver winner={winner}/>}
      {/* gameboard에서 사용할 player의 상태값을 확인하는 것을 gameboard에서 실행*/}
      <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>  
    </div>
    <Log turns={gameTurns}/>
  </main>;
}

export default App
