import List from './components/List/List';
import { IPopular } from '../../utils/interfaces';
import { useState, useEffect } from 'react';
import { getPopular } from '../../servises/servises';


const Home = () => {

  const [films, setFilms] = useState<[]|IPopular[]>([]);

  useEffect( () => {
    getPopular().then(date => setFilms(date)).catch(error => console.log(error))
}, [])

  return (
    <div>
      <List movieList={films}/>
    </div>
  )
}

export default Home
