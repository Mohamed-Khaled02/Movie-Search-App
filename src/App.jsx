import { useEffect, useState } from "react";
import Search from "./components/SearchBar";
import "./App.css";
import Movies from "./components/Movies";

// 6ccf31bf
const API_URL = "http://www.omdbapi.com/?apikey=6ccf31bf";

function App() {
  const [movieData, setMovieData] = useState([]);
  const [searchField, setSearchField] = useState("");

  function fetchUrl() {
    fetch(`${API_URL}&s=${searchField}`)
      .then((response) => response.json())
      .then((data) => setMovieData(data.Search));
  }

  useEffect(() => {
    fetchUrl();
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <Search
        searchField={searchField}
        setSearchField={setSearchField}
        fetchUrl={fetchUrl}
      />
      {movieData ? (
        <Movies movieData={movieData} />
      ) : (
        <div className="empty">
          <h2>no movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
