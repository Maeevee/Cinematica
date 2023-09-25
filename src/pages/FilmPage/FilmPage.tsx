import React, { useEffect, useState, useRef } from 'react'
import { Outlet, useLocation, useParams, NavLink } from 'react-router-dom';
import { Box, Tabs, Tab } from '@mui/material';
import { getById } from '../../servises/servises';
import { IFilm } from '../../utils/interfaces';
import { navFilm } from '../../utils/navItems';
import styles from "./FilmPage.module.css";
import { Link } from 'react-router-dom';
import Rating from '../../components/Rating/Rating';
import SaveDeleteButton from '../../components/SaveDeleteButton/SaveDeleteButton';


const FilmPage = () => {

    const {filmId} = useParams();
    const [film, setFilm] = useState<null|IFilm>();

    const location = useLocation();
    
    const backLink = location?.state?.from ?? "/";

    const backLocation = useRef(backLink);
    
    useEffect( () => {
        getById(filmId as string).then (response => {
            const filmData = response; 
            setFilm(filmData); 
        }).catch(error => console.log(error));
    }, [filmId])

    const releaseDate = new Date(film?.release_date as string);
    const year = new Date(releaseDate).getFullYear();

    const raiting = film?.vote_average as number;

    // Tabs
    const [selectedTab, setSelectedTab] = React.useState(1);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        // event.preventDefault();
        setSelectedTab(newValue);
    };

    const boxStyles = {
        borderBottom: '1px solid #ddd',
        borderColor: 'divider',
        borderRadius: location.pathname.includes('/cast') ||
                      location.pathname.includes('/review') ||
                      location.pathname.includes('/trailer')
            ? '3rem 3rem 0 0'
            : '3rem',
        backdropFilter: 'blur(20px)',
        margin: '0 30px',
    };

    return (
        <div className={styles.filmPageContainer}>
            <div className={styles.filmInfoContainer}>
            {film && (
                <div className={styles.flexContainer}>
                    <div className={styles.imageContainer}>
                        <img className={styles.roundedImg} alt={film.title} src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`} />
                        <div className={styles.gradientOverlay}></div>
                        {film && <SaveDeleteButton film={film} className={styles.SaveDeleteButton}/>}
                        <div className={styles.GoBackButtonContainer}><NavLink  to={backLocation.current}><svg className={styles.GoBackButton} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/></svg></NavLink></div>
                    </div>
                    <div className={styles.listContainer}>
                        <h2 className={styles.title}>{film.title}</h2>
                        <ul className={styles.list}>
                            <li className={`${styles.roundedTopLi} ${styles.li}`}>
                            <span>Year:</span> {year}
                            </li>
                            <li className={styles.li}>
                            <span>Genres: </span>
                            {film.genres?.map(({ id, name }, index) => (
                                <span key={id}>
                                {name}
                                {index !== film.genres.length - 1 && ','}
                                </span>
                            ))}
                            </li>
                            <li className={styles.li}>
                            <span>Duration:</span> {film.runtime} min
                            </li>
                            <li className={styles.li}>
                            <span>Country: </span>
                            {film.production_countries?.map(({ id, name }, index) => (
                                <span key={id}>
                                {name}
                                {index !== film.production_countries.length - 1 && ','}
                                </span>
                            ))}
                            </li>
                            <li className={styles.li}>
                            <span>Language: </span>
                            {film.spoken_languages?.map(({ id, english_name }, index) => (
                                <span key={id}>
                                {english_name}
                                {index !== film.spoken_languages.length - 1 && ','}
                                </span>
                            ))}
                            </li>
                            <li className={styles.li}>
                            <span>Synopsis:</span> {film.overview}
                            </li>
                            <li className={`${styles.roundedBottomLi} ${styles.li} ${styles.flex}`}>
                            <Rating rating={raiting} />
                            </li>
                        </ul>
                    </div>
                </div>
            )}
            </div>
            <Box className={styles.box} sx={boxStyles}>
                <Tabs className={styles.tabs} value={selectedTab} onChange={handleChange} variant="fullWidth" aria-label="nav tabs example" centered>
                    {navFilm.map(({id, text, href}) => (
                        <Tab className={styles.tab} key={id} label={text} value={href} to={href} component={Link}/>))}
                </Tabs>
            </Box>
            <Outlet/>
        </div>
    )
};

export default FilmPage
