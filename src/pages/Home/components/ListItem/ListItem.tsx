import { Link, useLocation } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import styles from './ListItem.module.css'
import { IPopular } from '../../../../utils/interfaces'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Grid } from '@mui/material'

interface Props{film: IPopular}

const ListItem = ({film}: Props) => {

    const location = useLocation();

    const releaseDate = new Date(film?.release_date as string);
    const year = new Date(releaseDate).getFullYear();
    
    
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
