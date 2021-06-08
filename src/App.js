import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} isLargeRow />
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title="Top-Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Romantic" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
