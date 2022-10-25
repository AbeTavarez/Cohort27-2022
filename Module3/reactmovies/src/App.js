import {useState} from 'react'
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import './App.css';

function App() {
  // state to hold the movie data
  const [movie, setMovie] = useState(null)

  // Function to fetch movie data
  const getMovie = async (searchTerm) => {
    const res = fetch(`https://www.omdbapi.com/?apikey=98e3fb1f&t=${searchTerm}`)
    const data = await res.json()
    console.log(data);
    setMovie(data); // set the data into our state
  }

  return (
    <div className="App">
      <h1>React Movies</h1>
      <Form movieSearch={getMovie}/>
      <MovieDisplay />
    </div>
  );
}

export default App;
