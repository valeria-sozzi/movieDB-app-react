import { useEffect, useState } from "react";
import "../CardItem.scss";
import { apiOptions } from "../../../../utils";

const SerieCardItem = ({ serie }) => {
  const [resultActorSerieList, setResultActorSerieList] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${serie.id}/credits`, apiOptions)
      .then((response) => response.json())
      .then((resp) => setResultActorSerieList(resp.cast))
      .catch((err) => console.log(err));
  }, []);
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
              <span className="bold">Voto:</span>{" "}
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`fa-star ${
                    (Math.round(serie.vote_average) * 5) / 10 <= i
                      ? "fa-regular"
                      : "fa-solid"
                  }`}
                />
              ))}
            </div>
            <div>
              <span className="bold">Descrizione:</span> {serie.overview}
            </div>
            <div>
              <span className="bold">Attori:</span>
              {resultActorSerieList.map((actor) => (
                <div key={actor.id}>{actor.name}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SerieCardItem;
