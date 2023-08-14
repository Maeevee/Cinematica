
import React, { useEffect, useState, useRef } from 'react'
import { Outlet, useLocation, useParams, NavLink } from 'react-router-dom';
import { Box, Tabs, Tab } from '@mui/material';
import { getById } from '../../servises/servises';
import { IFilm } from '../../utils/interfaces';
import { navFilm } from '../../utils/navItems';
import styles from "./FilmPage.module.css";
import { IPopular } from '../../utils/interfaces';
import { Link } from 'react-router-dom';


const FilmPage = () => {

    const {filmId} = useParams();
    const [film, setFilm] = useState<null|IFilm>();
    
    const [buttonVariant, setButtonVariant] = useState(() => {
        const storage = localStorage.getItem("favourite");
        const data : IPopular[]|[] = JSON.parse (storage as string) ?? [];
        const isInStorage = data.find(item => item?.id === film?.id) 
        if (!isInStorage) {
            return false
        } 
        if (isInStorage) {
            return true
        }
    })

    const location = useLocation();
    
    const backLink = location?.state?.from ?? "/"

    const backLocation = useRef(backLink)

    const handleSave = () => {
        const storage = localStorage.getItem("favourite");
        const data : IPopular[]|[] = JSON.parse (storage as string) ?? [];
        const isInStorage = data.find(item => item?.id === film?.id) 
        if (!isInStorage) {
            localStorage.setItem("favourite", JSON.stringify([...data, film]))
            setButtonVariant(true)
        } 
        if (isInStorage) {
            const newData = data.filter(item => item?.id !== film?.id)
            localStorage.setItem("favourite", JSON.stringify([...newData]))
            setButtonVariant(false)
        }
    }
    
    useEffect( () => {
        getById(filmId as string).then (response => {
            const filmData = response; 
            setFilm(filmData); 
        }).catch(error => console.log(error));
    }, [filmId])

    useEffect( () => {
        const storage = localStorage.getItem("favourite");
        const data : IPopular[]|[] = JSON.parse (storage as string) ?? [];
        const isInStorage = data.find(item => item?.id === film?.id) 
        if (!isInStorage) {
            setButtonVariant(false)
        } 
        if (isInStorage) {
            setButtonVariant(true)
        }
    }, [film?.id])

    const releaseDate = new Date(film?.release_date as string);
    const year = new Date(releaseDate).getFullYear();

    const raiting = film?.vote_average as number;

    const generateStars = (raiting: number) => {
        const stars = [];
        const fiveStar = raiting / 2;
        
        const raitingRound = Math.round(fiveStar);
        
        for (let i = 0; i < 5; i++) {
            if (i < raitingRound) {
                stars.push(<span key={i} className={`text-yellow-400 text-4xl`}>★</span>)
            } else {
                stars.push(<span key={i} className={`text-gray-400 text-4xl`}>★</span>)
            }
        }
        return stars;
    }

    // Tabs
    const [selectedTab, setSelectedTab] = React.useState(1);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        // event.preventDefault();
        setSelectedTab(newValue);
    };

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
                                <li className={`${styles.li} ${styles.liOdd}`}><span className={`font-bold`}>Language:</span> {film.spoken_languages?.map (({id, english_name}, index) => <span key={id}> {english_name}{index !== film.spoken_languages.length - 1 && ','}</span>)}</li>
                                <li className={`${styles.li} ${styles.liEven}`}><span className={`font-bold`}>Synopsis:</span> {film.overview}</li>
                                <li className={`rounded-b-xl ${styles.li} ${styles.liOdd} flex`}>{generateStars(raiting)}</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
            <button onClick={handleSave}>{buttonVariant? 'delete' : 'save'}</button>
            {/* @ts-ignore */}
            <div className={`mt-11`}><NavLink  to={backLocation.current}>Go back</NavLink></div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={selectedTab} onChange={handleChange} variant="fullWidth" aria-label="nav tabs example" centered>
                    {navFilm.map(({id, text, href}) => (
                        <Tab key={id} label={text} value={href} to={href} component={Link}/>))}
                </Tabs>
            </Box>
            <Outlet/>
                    </>
    )
};

export default FilmPage
