import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return <main>
    <div id="game-container">
      {/* PLAYERS */}
      <ol id="players">
        <Player initialName="Player 1" symbole="O"/>
        <Player initialName="Player 2" symbole="X"/>
      </ol>

      <GameBoard/>
    </div>

    LOG
  </main>;
}

export default App
