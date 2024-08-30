import { useEffect, useState } from "react";
import "./header.scss";
import { apiOptions } from "../../../utils";

const Header = ({
  searchValue,
  setSearchValue,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [genreMovieList, setGenreMovieList] = useState([]);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list`, apiOptions)
      .then((response) => response.json())
      .then((resp) => setGenreMovieList(resp.genres))
      .catch((err) => console.log(err));
  }, []);
  return (
    <header>
      <div className="header-img">
        <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-symbol.jpg" />
      </div>
      <div className="header-search">
        <span className="search-name">
          <i className="fa-solid fa-magnifying-glass fa-xl"></i>
          <input
            value={searchValue}
            placeholder="Cerca Film o Serie TV"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </span>
        <span className="search-genre">
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
            }}
          >
            <option value="Tutti">Tutti</option>
            {genreMovieList.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </span>
      </div>
    </header>
  );
};

export default Header;
