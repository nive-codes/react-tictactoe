import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
function App() {

  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(){
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X') //기존 사용자 확인
  }

  return <main>
    <div id="game-container">
      {/* PLAYERS */}
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbole="X" isActive={activePlayer === 'X'}/>
        <Player initialName="Player 2" symbole="O" isActive={activePlayer === 'O'}/>
      </ol>

      {/* gameboard에서 사용할 player의 상태값을 확인하는 것을 gameboard에서 실행*/}
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>  
    </div>

    LOG
  </main>;
}

export default App
