
import { Grid } from '@mui/material';
import { IPopular } from '../../../../utils/interfaces';
import ListItem from '../ListItem/ListItem';
import styles from './List.module.css';


interface Props{movieList: IPopular[]|[]}

const List = ({movieList} : Props) => {

    return (
        <div className={styles.container}>
            <Grid container spacing={{ xs: 2, sm: 2, md: 3 , lg: 5}} columns={{ xs: 12, sm: 12, md: 12, lg: 10 }}>
            {movieList.map((film) =>
                <ListItem key={film.id} film={film}/>
            )}
            </Grid>
        </div>
    )
}

export default List
