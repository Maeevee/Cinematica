import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import Favourite from "./pages/Favourite/Favourite";
import Layout from "./components/Layout/Layout";
import FilmPage from "./pages/FilmPage/FilmPage";
import Cast from "./pages/FilmPage/pages/Cast/Cast";
import Review from "./pages/FilmPage/pages/Review/Review";
import Trailer from "./pages/FilmPage/pages/Trailer/Trailer";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Navigate to="home"/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="movie" element={<Movie/>}/>
        <Route path="favourite" element={<Favourite/>}/>
        <Route path="movie/:filmId" element={<FilmPage/>}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="review" element={<Review/>}/>
          <Route path="trailer" element={<Trailer/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
