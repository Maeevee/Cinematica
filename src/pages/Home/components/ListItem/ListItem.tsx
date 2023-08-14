import { useLocation } from 'react-router-dom'
import styles from './ListItem.module.css'
import { IPopular } from '../../../../utils/interfaces'
import { NavLink } from 'react-router-dom'
import { Grid } from '@mui/material'
import { useEffect, useRef, useState } from 'react'

interface Props{film: IPopular}

const ListItem = ({film}: Props) => {

    const location = useLocation();
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number>(0);

    const releaseDate = new Date(film?.release_date as string);
    const year = new Date(releaseDate).getFullYear();

    function updateHeight() {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const calculatedHeight = containerWidth * 1.5;
            setHeight(calculatedHeight);
        }
    }

    useEffect(() => {
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []);
    
    
    
    return (
        <Grid item xs={6} sm={4} md={3} lg={2}>
                <NavLink to={`/movie/${film.id}`} state={{from:location}}>
                    <div className={styles.poster} ref={containerRef} style={{ height: `${height}px` }}>
                        <img alt={film.title} src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`} className={styles.posterImg} style={{ width: '100%', height: `${height}px` }}
            onLoad={updateHeight}/>
                        <div className={styles.posterInfo}>
                            <h2>{film.title}</h2>
                            <p>{year}</p>
                            <p>{film.vote_average}</p>
                            <button>Watch</button>
                        </div>
                    </div>
                </NavLink>
        </Grid>
    )
}

export default ListItem
