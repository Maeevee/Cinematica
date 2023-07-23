import { useState, ChangeEvent, useRef } from 'react';

const Movie = () => {
  const [KeyWord, setKeyWord] = useState('')

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (event : ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setKeyWord(value);
  };

  const handleInputClear = () => {
    setKeyWord('');
    inputRef.current!.focus();
  }

  return (
    <div  className='pt-40 pl-5'>
      <form>
        <input className='bg-black' ref={inputRef} type='text' value={KeyWord} onChange={handleInputChange}/>
        <button type='submit'>Search</button>
        <button type='button' onClick={handleInputClear}>Delite</button>
      </form>
    </div>
  )
}

export default Movie
