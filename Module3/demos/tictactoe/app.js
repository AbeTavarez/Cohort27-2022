// App Component
const App = () => {
  return (
    <div>
      <Header />
      <Player whichPlayer='X'/>
      <Player whichPlayer='O'/>
      <Board />
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <h1>React Tac Toe</h1>
    </div>
  );
};

const Player = (props) => {
  return (
    <div className={props.whichPlayer}>
      <h2>Player {props.whichPlayer}</h2>
      <h3>Wins: </h3>
    </div>
  );
};

const Board = () => {
  return(
    <div className='board'>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  )
}

const Square = () => {
  return(
    <div>
      <h4>Square</h4>
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById("root"));
