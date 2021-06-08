import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

export default function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchActionMovies);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 2)
        ] ||
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
      );
      console.log(Math.floor(Math.random() * request.data.results.length - 2));
    }

    fetchData();
  }, []);
  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.original_name || movie?.name || movie?.title}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <p className="banner__description">{truncate(movie?.overview, 150)}</p>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}
