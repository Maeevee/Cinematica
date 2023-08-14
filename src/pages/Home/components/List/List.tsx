
import { Grid } from '@mui/material';
import { IPopular } from '../../../../utils/interfaces';
import ListItem from '../ListItem/ListItem';
import styles from './List.module.css';


interface Props{movieList: IPopular[]|[]}

const List = ({movieList} : Props) => {

    return (
        <div className={`p-5 w-full`}>
            <ul className={`mt-20 flex flex-wrap justify-center`}>
            {movieList.map((film) =>
                <ListItem key={film.id} film={film}/>
            )}
            </ul>
        </div>
    )
}

export default List
