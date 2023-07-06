import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getCast } from '../../../../servises/servises';
import { response } from 'express';

const Cast = () => {

    const {filmId} = useParams();
    const [cast, setCast] = useState<any>();


    useEffect( () => {
        getCast(filmId as string).then (console.log
        )
    }

    )
    return (
        <div>
            Cast
        </div>
    )
}

export default Cast
