import { useEffect, useState } from "react";
import { useDebounce } from "react-use";
import "./App.css";
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";
import { getTrendingMovies, updateSearchCount } from "./appwrite.ts";

const API_BASE_URL = "https://imdb236.p.rapidapi.com/imdb/lowest-rated-movies";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "219edb2242mshb1933539b9760ebp1316c7jsn9edd776d7e43",
    "x-rapidapi-host": "imdb236.p.rapidapi.com",
  },
};
// const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [trendingMovies, setTrendingMovies] = useState([]);

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);
  const fetchMovies = async (query = "") => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      // quesry=${encodeURIComponent(query)}
      const endpoint = query
        ? `https://imdb236.p.rapidapi.com/imdb/autocomplete?query=${query}`
        : `${API_BASE_URL}`;

      const response = await fetch(endpoint, options);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      if (data.Response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMovieList([]);
        return;
      }

      // console.log(data[0].id);
      setMovieList(data || []);
      if (query && data.length > 0) {
        await updateSearchCount(query, data[0]);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Error fetching movies.");
    } finally {
      setIsLoading(false);
    }
  };

  const loadTrendingMovies = async () => {
    try {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    } catch (e) {
      console.log("Error fetching...");
    }
  };
  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    <main>
      <div className="pattern"></div>
      <div className="wrapper">
        <header>
          <img src="hero-img.png" alt="" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {trendingMovies.length > 0 && (
          <section className="trending">
            <h2>Trending Movies</h2>

            <ul>
              {trendingMovies.map((moive, index) => (
                <li key={moive.$id}>
                  <p>{index + 1}</p>
                  <img src={moive.poster_url} alt="" />
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="all-movies">
          <h2>All Movies</h2>

          {isLoading ? (
            <p className="text-red-500">Loading...</p>
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </section>
      </div>
    </main>
  );
}

export default App;
