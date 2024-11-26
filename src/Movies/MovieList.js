import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MovieList(props) {
  const navigate = useNavigate();
  const movieClick = (id) => {
    navigate(`/movies/${id}`);
  }
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <div key={movie.id} onClick={() => movieClick(movie.id)}>
        <MovieDetails movie={movie} />
        </div>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
