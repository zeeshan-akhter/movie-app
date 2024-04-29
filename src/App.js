import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import Filters from "./components/Filters";
import movieData from "./data/movies.json";
import "./styles.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filters, setFilters] = useState({
    language: "",
    country: "",
    genre: "",
  });

  useEffect(() => {
    setMovies(movieData);
  }, []);

  useEffect(() => {
    const filtered = movies.filter((movie) => {
      const matchLanguage =
        !filters.language || movie.movielanguages.includes(filters.language);
      const matchCountry =
        !filters.country || movie.moviecountries.includes(filters.country);
      const matchGenre =
        !filters.genre || movie.moviegenres.includes(filters.genre);
      return matchLanguage && matchCountry && matchGenre;
    });
    setFilteredMovies(filtered);
  }, [movies, filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">ITion Solutions Assignment</h1>
      <h2 className="mt-4 mb-4">Movie App</h2>
      <Filters movies={movies} onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
