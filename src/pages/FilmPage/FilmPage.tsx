
import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { getById } from '../../servises/servises';
import { IFilm } from '../../utils/interfaces';
import { Link } from 'react-router-dom';
import { navFilm } from '../../utils/navItems';
import styles from "./FilmPage.module.css";

const FilmPage = () => {

    const {filmId} = useParams();
    const [film, setFilm] = useState<null|IFilm>();
    
    useEffect( () => {
        getById(filmId as string).then (response => {
            const filmData = response; 
            setFilm(filmData); 
        }).catch(error => console.log(error));
    }, [filmId])

    console.log(film);

    const releaseDate = new Date(film?.release_date as string);
    const year = new Date(releaseDate).getFullYear();

    const raiting = film?.vote_average as number;
    console.log(raiting);

    const generateStars = (raiting: number) => {
        const stars = [];
        const fiveStar = raiting / 2;
        console.log(fiveStar);
        
        const raitingRound = Math.round(fiveStar);
        console.log(raitingRound);
        
        for (let i = 0; i < 5; i++) {
            if (i < raitingRound) {
                stars.push(<span key={i} className={`text-yellow-400 text-4xl`}>★</span>)
            } else {
                stars.push(<span key={i} className={`text-gray-400 text-4xl`}>★</span>)
            }
        }
        return stars;
    }
    console.log(generateStars);
    

    return (
        <>
        <div>
            {film && (
                <div>
                    <img alt={film.title} src={`https://image.tmdb.org/t/p/w300/${film.backdrop_path}`}/>
                    
                    <div>
                        <h2>{film.title}</h2>
                        <div>Ganres:{film.genres?.map (({id, name}) => <p key={id}>{name}</p>)}</div>
                        <p>{film.overview}</p>
                        <div>
                            <ul className={`rounded-3xl`}>
                                <li className={`rounded-b-xl ${styles.li} ${styles.liOdd} flex`}>{generateStars(raiting)}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
        <ul>
                        {navFilm.map(({id, text, href}) => <li style={{color:"white"}}  key={id}><Link to={href}>{text}</Link></li>)}
                    </ul>
                    <Outlet/>
                    </>
    )
}

export default FilmPage
