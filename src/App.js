import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import MovieDetail from "./components/movieDetail/MovieDetail";
import PageNotFound from "./components/pageNotFound/PageNotFound";



function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/movie/:imdbID" element={<MovieDetail/>}/>
            <Route element={<PageNotFound/>}/>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
