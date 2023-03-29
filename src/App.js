import {useState, useEffect } from 'react';
import './App.css';
 import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'https://www.omdbapi.com?apikey=76bb75b3'

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  //Handling API
  const searchMovies = async  (title) => {
    //calling APi
    const response = await fetch(`${API_URL}&s={title}`);
    //getting data from response, data about movies
    const data = await response.json();

    setMovies(data.Search);
  }
  useEffect(() => {
    //calling searchMovies with a movie title
    
    searchMovies('Spiderman')

  }, []);

  return (
     <div className='app'>
        <h1>AGsFlix</h1>

        <div className="search">

            <input
              placeholder="Search for movies"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
            />

            <img 
            
              src={SearchIcon}
              alt="search"
              onClick ={() => searchMovies(searchTerm)}
            /> 

        </div>
        {
          movies?.length > 0
          ? (
          <div className="container"> 
           {movies.map((movie) => (
             <MovieCard movie={movie}/>
           ))}
          </div>
          ) : (
          <div className='empty'>
             <h2>No movies found</h2>
          </div>
          )
        }
     </div> 
  );
}

export default App;
