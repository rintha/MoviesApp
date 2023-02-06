import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  async function fetchMoviesHandler() {
   const response = await fetch("https://swapi.dev/api/films/");
       const data= await response.json();
      
  
        const transformMovies = data.results.map((moviedata) => {
          return {
            id: moviedata.episode_id,
            title: moviedata.title,
            releaseDate: moviedata.release_date,
            openingText: moviedata.opening_crawl,
          };
        });
        setMovies(transformMovies);
      
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
