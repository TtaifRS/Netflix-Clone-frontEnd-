import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import movieTrailer from "movie-trailer";
import "./Row.css";

const baseURL = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(
    () => {
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
      }
      fetchData();
    },
    [fetchUrl]
    //if[`empty`], run once when the rows load and never run again
  );

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  console.log(trailerUrl);
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.title ||
          movie?.name ||
          movie?.original_title ||
          movie?.original_name ||
          ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.original_title}
            key={movie.id}
            onClick={() => handleClick(movie)}
          ></img>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
