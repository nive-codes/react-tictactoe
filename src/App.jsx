import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

// 상태를 최소한으로 사용하도록 처리
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
  // const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);


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

      {/* gameboard에서 사용할 player의 상태값을 확인하는 것을 gameboard에서 실행*/}
      <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>  
    </div>
    <Log turns={gameTurns}/>
  </main>;
}

export default App
