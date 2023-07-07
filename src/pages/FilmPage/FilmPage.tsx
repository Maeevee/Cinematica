
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
            <div className={`p-5 w-full ${styles.text}`}>
                {film && (
                    <div className={`flex mt-20 mb-10`}>
                            <img className={`rounded-xl mr-10`} alt={film.title} src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`}/>
                        <div>
                            <h2 className={`${styles.title}`}>{film.title}</h2>
                            <ul className={`rounded-3xl`}>
                                <li className={`rounded-t-xl ${styles.li} ${styles.liOdd}`}><span className={`font-bold`}>Year:</span> {year}</li>
                                <li className={`${styles.li} ${styles.liEven}`}><span className={`font-bold`}>Ganres:</span>{film.genres?.map (({id, name}, index) => <span key={id}> {name}{index !== film.genres.length - 1 && ','}</span>)}</li>
                                <li className={`${styles.li} ${styles.liOdd}`}><span className={`font-bold`}>Duration:</span> {film.runtime} min</li>
                                <li className={`${styles.li} ${styles.liEven}`}><span className={`font-bold`}>Countrie:</span> {film.production_countries?.map (({id, name}, index) => <span key={id}> {name}{index !== film.production_countries.length - 1 && ','}</span>)}</li>
                                <li className={`${styles.li} ${styles.liOdd}`}><span className={`font-bold`}>Language:</span> {film.spoken_languages?.map (({id, english_name}, index) => <span key={id}> {english_name}{index !== film.genres.length - 1 && ','}</span>)}</li>
                                <li className={`${styles.li} ${styles.liEven}`}><span className={`font-bold`}>Synopsis:</span> {film.overview}</li>
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
