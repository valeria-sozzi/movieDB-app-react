import { useEffect, useState } from "react";
import SerieCardItem from "../cardItem/serieCardItem/SerieCardItem";
import { apiOptions } from "../../../utils";

const SerieList = () => {
  const [resultSerieList, setResultSerieList] = useState([]);
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/tv/popular", apiOptions)
      .then((response) => response.json())
      .then((resp) => setResultSerieList(resp.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="card-container">
      {resultSerieList.map((serie) => (
        <li key={serie.id}>
          <SerieCardItem serie={serie} />
        </li>
      ))}
    </div>
  );
};

export default SerieList;
