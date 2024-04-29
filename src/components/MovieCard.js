import React from "react";

const MovieCard = ({ movie }) => {
  const {
    movietitle,
    moviemainphotos,
    movielanguages,
    moviecountries,
    moviegenres,
  } = movie;

  return (
    <div className="movie-card">
      <img src={moviemainphotos[0]} alt={movietitle} />
      <h2>{movietitle}</h2>
      <p>
        <b>Languages:</b> {movielanguages.join(", ")}
      </p>
      <p>
        <b>Countries: </b>
        {moviecountries.length > 0 ? moviecountries.join(", ") : "N/A"}
      </p>
      <p>
        <b>Genres: </b>
        {moviegenres.join(", ")}
      </p>
    </div>
  );
};

export default MovieCard;
