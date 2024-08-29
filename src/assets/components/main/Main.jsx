import MovieList from "../movieList/MovieList";
import SerieList from "../serieList/SerieList";
import "./Main.scss";

const Main = ({ searchValue }) => {
  return (
    <main>
      <h1>Film Popolari:</h1>
      <MovieList searchValue={searchValue} />
      <h1>Serie Popolari:</h1>
      <SerieList searchValue={searchValue} />
    </main>
  );
};

export default Main;
