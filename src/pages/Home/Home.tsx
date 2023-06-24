import {useEffect, useState} from 'react'
import { getPopular } from '../../servises/servises'
import { IPopular } from '../../utils/interfaces';


const Home = () => {

  const [films, setFilms] = useState<[]|IPopular[]>([]);

  useEffect( () => {
    getPopular().then(date => setFilms(date)).catch(error => console.log(error))
  }, [])

  console.log(films);
  
  return (
    <div>
      
    </div>
  )
}

export default Home
