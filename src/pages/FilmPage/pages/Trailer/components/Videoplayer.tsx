import Iframe from 'react-iframe';
import { ITrailer } from '../../../../../utils/interfaces';
import styles from './Videoplayer.module.css'
import { Grid } from '@mui/material';

interface Props{data:ITrailer[]};

export const Videoplayer = ({ data }: Props) => {
  return (
    <div className={styles.gridContainer}>
      <Grid container  spacing={{ xs: 2, sm: 2, md: 3 , lg: 5}} columns={{ xs: 12, sm: 12, md: 12, lg: 9 }} >
        {data.map(({ key, name }) => (
          <Grid className={styles.gridItem} item xs={12} sm={6} md={6} lg={3}  key={key}>
              <Iframe className={styles.iframe}
                title={name}
                url={`https://www.youtube.com/embed/${key}?rel=0&showinfo=0&autoplay=1`}
                width="100%"
                height="320px"
                overflow="cover"
              />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export {};