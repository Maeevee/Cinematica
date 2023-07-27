import { useState, ChangeEvent, useRef, useEffect } from 'react';
import { fetchByName } from '../../servises/servises';
import { IPopular } from '../../utils/interfaces';
import { useSearchParams } from 'react-router-dom';
import List from '../Home/components/List/List';
import styles from './Movie.module.css';
import { FaSearch } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

const Movie = () => {
  const [KeyWord, setKeyWord] = useState('')

  const [movies, setMovies] = useState<[]|IPopular[]>([]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('movie') ?? '';

  useEffect(() => {
    fetchByName(movieName).then(setMovies).catch(console.log)
  }, [movieName])

  const handleInputChange = (event : ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setKeyWord(value);
  };

  const handleInputClear = () => {
    setKeyWord('');
    setSearchParams({movie : ''})
    inputRef.current!.focus();
  }

  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSearchParams({movie : KeyWord})
  }
console.log(movies);

  return (
    <div  className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.searchBar}>
        <button className={styles.searchBarButtonSearch} type='submit' ><FaSearch /></button>
        <input className={styles.searchBarInput} ref={inputRef} type='text' value={KeyWord} onChange={handleInputChange}/>
        <button className={styles.searchBarButtonDelite} type='button' onClick={handleInputClear}><FaTrashAlt /></button>
      </form>
      <List movieList={movies}/>

    </div>
  )
}

export default Movie
