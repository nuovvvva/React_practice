import {useState} from 'react';
import MovieCard from '../components/MovieCard';
import '../css/Home.css';

function Home() {
  const [searchQuery, setsearchQuery] = useState("");

  const movies = [
    {id: 1, title: "John Wick", release_date: "2020"},
    {id: 2, title: "Terminator", release_date: "1999"},
    {id: 3, title: "The Matrix", release_date: "1998"},
  ]

 const hadleSearch = (e) => {
  e.preventDefault();
  alert(searchQuery);
  setsearchQuery("")
 };
  
  return (
    <div className="home">
      <form onSubmit={hadleSearch} className="search-form">
        <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e) => {setsearchQuery(e.target.value)}}/>
        <button type="submit" className="search=button">Search</button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          movie.title.toLowerCase().startsWith(searchQuery) && 
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  )
}

export default Home;