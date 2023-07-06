import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import Favourite from "./pages/Favourite/Favourite";
import Layout from "./components/Layout/Layout";
import FilmPage from "./pages/FilmPage/FilmPage";
import Cast from "./pages/FilmPage/pages/Cast/Cast";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Navigate to="home"/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="movie" element={<Movie/>}/>
        <Route path="favourite" element={<Favourite/>}/>
        <Route path="movie/:filmId" element={<FilmPage/>}/>
        <Route path="movie/:filmId" element={<FilmPage/>}>
          <Route path="cast" element={<Cast/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
