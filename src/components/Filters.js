import React from "react";

const Filters = ({ movies, onFilterChange }) => {
  const handleLanguageChange = (event) => {
    onFilterChange("language", event.target.value);
  };

  const handleCountryChange = (event) => {
    onFilterChange("country", event.target.value);
  };

  const handleGenreChange = (event) => {
    onFilterChange("genre", event.target.value);
  };

  return (
    <div className="filters">
      <h2>Filters</h2>
      {/* Language filter */}
      <div className="filter">
        <label htmlFor="language">Language:</label>
        <select id="language" onChange={handleLanguageChange}>
          <option value="">All</option>
          {/* Add options for each language */}
          {/* For simplicity, we'll use only unique languages */}
          {Array.from(
            new Set(movies.flatMap((movie) => movie.movielanguages))
          ).map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
      {/* Country filter */}
      <div className="filter">
        <label htmlFor="country">Country:</label>
        <select id="country" onChange={handleCountryChange}>
          <option value="">All</option>
          {/* Add options for each country */}
          {/* For simplicity, we'll use only unique countries */}
          {Array.from(
            new Set(movies.flatMap((movie) => movie.moviecountries))
          ).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      {/* Genre filter */}
      <div className="filter">
        <label htmlFor="genre">Genre:</label>
        <select id="genre" onChange={handleGenreChange}>
          <option value="">All</option>
          {/* Add options for each genre */}
          {/* For simplicity, we'll use only unique genres */}
          {Array.from(
            new Set(movies.flatMap((movie) => movie.moviegenres))
          ).map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
