import "../CardItem.scss";

const MovieCardItem = ({ movie }) => {
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
              <span className="bold">Titolo originale:</span>{" "}
              {movie.original_title}
            </div>
            <div>
              <span className="bold">Data di rilascio:</span>{" "}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCardItem;
