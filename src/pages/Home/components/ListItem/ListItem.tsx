import { useLocation } from 'react-router-dom'
import styles from './ListItem.module.css'
import { IPopular } from '../../../../utils/interfaces'
import { NavLink } from 'react-router-dom'
import { Grid } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
// import SaveDeleteButton from '../../../../components/SaveDeleteButton/SaveDeleteButton'
import Rating from '../../../../components/Rating/Rating'

interface Props{film: IPopular}

const ListItem = ({film}: Props) => {

    const location = useLocation();
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number>(0);
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
    const [fontSize, setFontSize] = useState<number>(35);
    // const [isButtonClicked, setIsButtonClicked] = useState(false);

    const releaseDate = new Date(film?.release_date as string);
    const year = new Date(releaseDate).getFullYear();

    function updateDimensions() {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const calculatedHeight = containerWidth * 1.5;
            setHeight(calculatedHeight);

            const newFontSize = Math.min(30, Math.max(12, (containerWidth / 300) * 35));
            setFontSize(newFontSize);
        }
    }

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        setIsLargeScreen(window.innerWidth > 1280);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    

    return (
        <Grid item xs={6} sm={4} md={3} lg={2}>
            {isLargeScreen ? (
                <NavLink to={`/movie/${film.id}`} state={{from:location}}>
                    <div className={styles.poster} ref={containerRef} style={{ height: `${height}px` }}>
                        <img alt={film.title} src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`} className={styles.posterImg} style={{ width: '100%', height: `${height}px` }}
            onLoad={updateDimensions}/>
                        <div className={styles.posterInfo}>
                            <h2 className={styles.title} style={{ fontSize: `${fontSize}px` }}>{film.title}</h2>
                            <p className={styles.year}>{year}</p>
                            <p className={styles.vote}><Rating rating={film.vote_average}/></p>
                            {/* <SaveDeleteButton film={film} className={styles.SaveDeleteButton}/> */}
                        </div>
                    </div>
                </NavLink>
            ) : (
                <div className={styles.poster} ref={containerRef} style={{ height: `${height}px` }}>
                        <img alt={film.title} src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`} className={styles.posterImg} style={{ width: '100%', height: `${height}px` }}
            onLoad={updateDimensions}/>
                        <div className={styles.posterInfo}>
                            <h2 className={styles.title} style={{ fontSize: `${fontSize}px` }}>{film.title}</h2>
                            <p className={styles.year}>{year}</p>
                            <p className={styles.vote}><Rating rating={film.vote_average}/></p>
                            <NavLink to={`/movie/${film.id}`} state={{from:location}}><button className={styles.watch}>Watch</button></NavLink>
                            {/* <SaveDeleteButton film={film} className={styles.SaveDeleteButton}/> */}
                        </div>
                    </div>
            )}
        </Grid>
    )
}

export default ListItem