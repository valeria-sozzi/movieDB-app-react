import { useEffect, useState } from "react";
import "../CardItem.scss";
import { apiOptions } from "../../../../utils";

const MovieCardItem = ({ movie }) => {
  const [resultActorMovieList, setResultActorMovieList] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits`, apiOptions)
      .then((response) => response.json())
      .then((resp) => setResultActorMovieList(resp.cast))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="card">
        <div className="card-front">
          <img
            src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
          />
        </div>
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          }}
          className="card-details"
        >
          <div className="details">
            <div className="pt-5">
              <span className="bold">Titolo:</span> {movie.title}
            </div>
            <div>
              <span className="bold">Titolo originale:</span>
              {movie.original_title}
            </div>
            <div>
              <span className="bold">Data di rilascio:</span>
              {movie.release_date}
            </div>
            <div>
              <span className="bold">Lingua:</span> {movie.original_language}
            </div>
            <div>
              <span className="bold">Voto:</span> {movie.vote_average}
            </div>
            <div>
              <span className="bold">Descrizione:</span> {movie.overview}
            </div>
            <div>
              <span className="bold">Attori:</span>
              {resultActorMovieList.map((actor) => (
                <div key={actor.id}>{actor.name}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCardItem;
