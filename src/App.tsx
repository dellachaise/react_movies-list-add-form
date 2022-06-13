import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { NewMovie } from './components/NewMovie';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [movies, setMovie] = useState(moviesFromServer);

  const addMovie = (newMovieInfo : Movie) => {
    const newMovieObject = {
      ...newMovieInfo,
    };

    setMovie((currentMovies) => [...currentMovies, newMovieObject]);
  };

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={movies} />
      </div>
      <div className="sidebar">
        <NewMovie addNewMovie={addMovie} />
      </div>
    </div>
  );
};
