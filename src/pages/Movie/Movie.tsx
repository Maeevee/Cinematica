import { useState, ChangeEvent, useRef, useEffect } from 'react';
import { fetchByName } from '../../servises/servises';
import { IPopular } from '../../utils/interfaces';
import { useSearchParams } from 'react-router-dom';
import List from '../Home/components/List/List';

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
      </form>
      <List movieList={movies}/>

    </div>
  )
}

export default Movie
