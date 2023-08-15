import { useState} from 'react'
import { IPopular } from '../../utils/interfaces';
import ListItem from '../Home/components/ListItem/ListItem';

const Favourite = () => {

  const [favourite] = useState<[]|IPopular[]>(() => {
    const storage = localStorage.getItem("favourite")
    const data = JSON.parse(storage as string) ?? [];
    return data;
  });

  return (
    <div>
      <ul>
        {favourite.map((film) =>
          <ListItem key={film.id} film={film}/>
        )}
      </ul>
    </div>
  )
}

export default Favourite
