import "./MovieList.scss";
import MovieCardItem from "../cardItem/movieCardItem/MovieCardItem";
import { useEffect, useState } from "react";
import { apiOptions } from "../../../utils";

const MovieList = ({ searchValue }) => {
  const [resultMovieList, setResultMovieList] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", apiOptions)
      .then((response) => response.json())
      .then((resp) => setResultMovieList(resp.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="card-container">
      {resultMovieList.map(
        (movie) =>
          movie.title.toLowerCase().includes(searchValue) && (
            <li key={movie.id}>
              <MovieCardItem movie={movie} />
            </li>
          )
      )}
    </div>
  );
};

export default MovieList;
