import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Discover Movies" fetchUrl={requests.fetchMovieDiscover} />
      <Row title="Discover TV-Series" fetchUrl={requests.fetchTvDiscover} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />
      <Row title="Upcoming" fetchUrl={requests.fetchUpcoming} />
      <Row title="Romantic" fetchUrl={requests.fetchRomantic} />
      <Row title="Action" fetchUrl={requests.fetchAction} />
      <Row title="Animation" fetchUrl={requests.fetchAnimation} />
      <Row title="Comedy" fetchUrl={requests.fetchComedy} />
      <Row title="Drama" fetchUrl={requests.fetchDrama} />
      <Row title="Documentary" fetchUrl={requests.fetchDocumentary} />
      <Row title="Fantasy" fetchUrl={requests.fetchFantasy} />
      <Row title="Horror" fetchUrl={requests.fetchHorror} />
      <Row title="Sci-Fi" fetchUrl={requests.fetchScienceFiction} />
      <Row title="Thriller" fetchUrl={requests.fetchThriller} />
    </div>
  );
}

export default App;
