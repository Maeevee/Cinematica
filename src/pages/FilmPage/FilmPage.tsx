
import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { getById } from '../../servises/servises';
// import styles from "./FilmPage.module.css";
import { IFilm } from '../../utils/interfaces';
import { Link } from 'react-router-dom';
import { navFilm } from '../../utils/navItems';

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
