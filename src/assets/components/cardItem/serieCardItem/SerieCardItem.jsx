import "../CardItem.scss";

const SerieCardItem = ({ serie }) => {
  return (
    <>
      <div className="card">
        <div className="card-front">
          <img
            src={"https://image.tmdb.org/t/p/original" + serie.poster_path}
          />
        </div>
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${serie.backdrop_path})`,
          }}
          className="card-details"
        >
          <div className="details">
            <div className="pt-5">
              <span className="bold">Titolo:</span> {serie.name}
            </div>
            <div>
              <span className="bold">Titolo originale:</span>
              {serie.original_name}
            </div>
            <div>
              <span className="bold">Data di rilascio:</span>{" "}
              {serie.first_air_date}
            </div>
            <div>
              <span className="bold">Lingua:</span> {serie.original_language}
            </div>
            <div>
              <span className="bold">Voto:</span> {serie.vote_average}
            </div>
            <div>
              <span className="bold">Descrizione:</span> {serie.overview}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SerieCardItem;
