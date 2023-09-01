import { useEffect, useState } from "react";

import logo from "../assets/devflix2.png";
import searchIcon from "../assets/Vector.svg";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";

import "./App.css";
import MovieCard from "../components/MovieCard/movieCard";
import Footer from "../components/footer/footer";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const apiKey = "eee79e61";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    console.log(data);
    setMovies(data.Search);
  };

  // JEITO MAIS COMPLEXO DE FAZER A API

  // fetch(apiUrl)
  // .then((response) => response.json())
  // .then((data) => console.log(data));

  const handleKeyPress = (e) => {
    e.key === "Enter" && searchMovies(searchTerm);
  };

  return (
    <>
      <div className="divMaster">
        <div id="app">
          {/* <div className="cabecalhoMaster"> */}
          <div className="logo">
            <img src={logo} alt="logo devflix" />
          </div>
          <div className="navegacao">
            <ul>
              <li>
                <a href="#">Início</a>
              </li>
              <li>
                <a href="#">Filmes</a>
              </li>
              <li>
                <a href="#">Séries</a>
              </li>
            </ul>
          </div>
          <div className="search">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Pesquise por filmes"
            />
            <img
              src={searchIcon}
              alt="Icone de pesquisa"
              onClick={() => searchMovies(searchTerm)}
            />
          </div>
          {/* </div> */}
        </div>
        <div className="espacotitle">
          <h2>Em alta:</h2>
        </div>
        {movies?.length > 0 ? (
          <>
            <div className="container">
              <section className="sect">
                {movies.map((movie) => (
                  <MovieCard key={movie.imdbID} movies={movie} />
                ))}
              </section>
            </div>
            <div className="espacotitle2">
              <h2>Lançamentos:</h2>
            </div>
            <div className="container2">
            
              <section className="sect">
                {movies.map((movie) => (
                  <MovieCard key={movie.imdbID} movies={movie} />
                ))}
              </section>
            </div>

            <div className="espacotitle2">
              <h2>Filmes de comédia:</h2>
            </div>
            <div className="container2">
            
              <section className="sect">
                {movies.map((movie) => (
                  <MovieCard key={movie.imdbID} movies={movie} />
                ))}
              </section>
            </div>

            <div className="espacotitle2">
              <h2>Filmes de ação:</h2>
            </div>
            <div className="container2">
            
              <section className="sect">
                {movies.map((movie) => (
                  <MovieCard key={movie.imdbID} movies={movie} />
                ))}
              </section>
            </div>

          </>
        ) : (
          <div className="empty">
            <h2>Nenhum filme encontrado 😢</h2>
          </div>
        )}
        <Footer link={"https:github.com.br"}>VictorMatoso</Footer>
      </div>
    </>
  );
};

export default App;
