
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getById } from '../../servises/servises';

const FilmPage = () => {

    const {filmId} = useParams();
    const [film, setFilm] = useState<any>(null)
    
    useEffect( () => {
        getById(filmId as string).then (date => setFilm(date)).catch(error => console.log(error));
    }, [filmId])

    return (
        <div>
        Film Page
        </div>
    )
}

export default FilmPage
