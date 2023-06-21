import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import Favourite from "./pages/Favourite/Favourite";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Navigate to="home"/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="movie" element={<Movie/>}/>
        <Route path="favourite" element={<Favourite/>}/>
      </Route>
    </Routes>
  );
}

export default App;
