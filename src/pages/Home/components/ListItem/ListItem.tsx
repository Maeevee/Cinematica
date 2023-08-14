import { Link, useLocation } from 'react-router-dom'
import styles from './ListItem.module.css'
import { IPopular } from '../../../../utils/interfaces'
import { useState } from 'react'

interface Props{film: IPopular}

const ListItem = ({film}: Props) => {

    const location = useLocation();

    const releaseDate = new Date(film?.release_date as string);
    const year = new Date(releaseDate).getFullYear();
    
    
    return (
        <li className={`p-5 w-64 m-0 `}>
            <Link to={`/movie/${film.id}`} state={{from:location}}>
                <div className={styles.poster}>
                    <img alt={film.title} src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`} className={`rounded-xl`}/>
                    <div className={styles.posterInfo}>
                        <h2 className={`text-white text-2xl font-bold`}>{film.title}</h2>
                        <p>{year}</p>
                        <p>{film.vote_average}</p>
                        <button>Watch</button>
                        
                        


                    </div>
                </div>
                {/* <h2>{film.title}</h2> */}
            </Link>
        </li>
    )
}

export default ListItem
