import { Link, useLocation } from 'react-router-dom'
import styles from './ListItem.module.scss'
import { IPopular } from '../../../../utils/interfaces'

interface Props{film: IPopular}

const ListItem = ({film}: Props) => {

    const location = useLocation();
    console.log(location);
    
    return (
        <li>
            <Link to={`/movie/${film.id}`} state={{from:location}}>
                <img alt={film.title} src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`}/>
                <h2>{film.title}</h2>
            </Link>
        </li>
    )
}

export default ListItem
