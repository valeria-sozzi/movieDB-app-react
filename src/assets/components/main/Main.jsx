import MovieList from "../movieList/MovieList";
import SerieList from "../serieList/SerieList";
import "./Main.scss";

const Main = () => {
  return (
    <main>
      <h1>Film Popolari:</h1>
      <MovieList />
      <h1>Serie Popolari:</h1>
      <SerieList />
    </main>
  );
};

export default Main;
