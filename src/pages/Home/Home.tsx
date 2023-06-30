import {useEffect, useState} from 'react'
import { getPopular } from '../../servises/servises'
import { IPopular } from '../../utils/interfaces';
import { Link } from 'react-router-dom';



const Home = () => {

  const [films, setFilms] = useState<[]|IPopular[]>([]);

  useEffect( () => {
    getPopular().then(date => setFilms(date)).catch(error => console.log(error))
  }, [])

  console.log(films);
  
  return (
    <div>
      <ul>
        {films.map((film) =>
          <li key={film.id}>
            <Link to={`/movie/${film.id}`}>
              <img alt={film.title} src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`}/>
              <h2>{film.title}</h2>
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Home
