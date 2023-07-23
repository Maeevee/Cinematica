import {useEffect, useState} from 'react'
import { getPopular } from '../../servises/servises'
import { IPopular } from '../../utils/interfaces';
import { Link } from 'react-router-dom';
import ListItem from './components/ListItem/ListItem';



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
          <ListItem key={film.id} film={film}/>
        )}
      </ul>
    </div>
  )
}

export default Home
