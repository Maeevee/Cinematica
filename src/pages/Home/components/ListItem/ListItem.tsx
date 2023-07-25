import { Link, useLocation } from 'react-router-dom'
import styles from './ListItem.module.css'
import { IPopular } from '../../../../utils/interfaces'
import { useState } from 'react'

interface Props{film: IPopular}

const ListItem = ({film}: Props) => {

    const location = useLocation();
    console.log(location);

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };
    
    const handleMouseLeave = () => {
        setHovered(false);
    };
    
    const imagePath = hovered ? film.backdrop_path : film.poster_path;
    
    const containerStyle: React.CSSProperties = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w300/${film.backdrop_path})`,
        width: hovered ? '200%' : '100%',
        height: hovered ? '50%' : '100%',
        transition: 'width 0.5s ease',
        borderRadius: '20px',
      };
    
      // Correct type for imageStyle
      const imageStyle: React.CSSProperties = {
         // Add any other styles you want to apply to the image
      };


    
    
    return (
        <li className={`p-5 w-64 m-0`}>
            <Link to={`/movie/${film.id}`} state={{from:location}}>
                <div style={containerStyle} className={styles.poster}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                    <img alt={film.title} src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`} style={imageStyle} className={`rounded-xl hover:opacity-0 hover:h-1/2 hover:ease-in duration-300`}/>

                </div>
                {/* <h2>{film.title}</h2> */}
            </Link>
        </li>
    )
}

export default ListItem
