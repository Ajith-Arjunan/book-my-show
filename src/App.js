import "./App.css";

// Pages
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
import PlayPage from "./pages/Play.page";

// Routes
import { Routes, Route } from "react-router-dom";

import axios from "axios";

// React-Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = 'a13ac8bd214399bc2f8b632586377d9c';

function App() {
  return <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/movie/:id" element={<MoviePage />} />
    <Route path="/plays" element={<PlayPage />} />
  </Routes>
}

export default App;
