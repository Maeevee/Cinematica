import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCast } from '../../../../servises/servises';
import styles from './Cast.module.css';
import { ICast } from '../../../../utils/interfaces';
import placeholderImage from '../../../../assets/avatar-placeholder-300x300-1.gif';
import { Grid } from '@mui/material';

const Cast = () => {
  const { filmId } = useParams();
  const [cast, setCast] = useState<ICast[]>([]);

  useEffect(() => {
    getCast(filmId as string)
      .then((data) => {
        if (Array.isArray(data)) {
          setCast(data);
        }
      })
      .catch(console.log);
  }, [filmId]);

  return (
    <div className={styles.castContainer}>
      <Grid container spacing={{ xs: 2, sm: 2, md: 3 , lg: 5}} columns={{ xs: 12, sm: 12, md: 12, lg: 10 }} >
          {cast.map((actor, index) => (
            <Grid className={styles.gridItem} item xs={6} sm={6} md={4} lg={2}  key={index}>
              <div className={styles.castItem}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300/${actor.profile_path}`
                      : placeholderImage
                  }
                  alt={actor.name}
                />
                <p>{actor.name}</p>
              </div>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Cast;