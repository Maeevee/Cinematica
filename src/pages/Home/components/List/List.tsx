
import ListItem from '../ListItem/ListItem';
import { useState, useEffect } from 'react';
import { getPopular } from '../../../../servises/servises';
import styles from './List.module.scss';
import { IPopular } from '../../../../utils/interfaces';

const List = () => {

    const [films, setFilms] = useState<[]|IPopular[]>([]);

    useEffect( () => {
        getPopular().then(date => setFilms(date)).catch(error => console.log(error))
    }, [])

    return (
        <div className={`p-5 w-full`}>
            <ul className={`mt-20 flex flex-wrap justify-center`}>
            {films.map((film) =>
                <ListItem key={film.id} film={film}/>
            )}
            </ul>
        </div>
    )
}

export default List
