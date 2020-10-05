import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
const baseURL = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${baseURL}${movie?.backdrop_path})`,
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title ||
              movie?.name ||
              movie?.original_title ||
              movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>
          {/* background image
              title
              description
              button */}
        </div>
        <div className="banner--fadeBottom" />
      </header>
    </div>
  );
}

export default Banner;
