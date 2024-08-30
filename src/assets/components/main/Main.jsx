import MovieList from "../movieList/MovieList";
import SerieList from "../serieList/SerieList";
import "./Main.scss";

const Main = ({ searchValue, selectedCategory }) => {
  return (
    <main>
      <h1>Film Popolari:</h1>
      <MovieList
        searchValue={searchValue}
        selectedCategory={selectedCategory}
      />
      <h1>Serie Popolari:</h1>
      <SerieList searchValue={searchValue} />
    </main>
  );
};

export default Main;
