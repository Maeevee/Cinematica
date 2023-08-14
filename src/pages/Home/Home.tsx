import List from './components/List/List';
import { IPopular } from '../../utils/interfaces';
import { useState, useEffect } from 'react';
import { getPopular } from '../../servises/servises';
import { useSearchParams } from 'react-router-dom';
import PaginatedItems from '../../components/Pagination/Pagination';



const Home = () => {

  const [films, setFilms] = useState<[]|IPopular[]>([]);

  const [totalPages, setTotalPage] = useState(0)

const [searchParems, setSearchParems] = useSearchParams();
const pageNumber = Number(searchParems.get('page') ?? 1)

  useEffect( () => {
    getPopular(pageNumber.toString()).then(date => {setFilms(date.results); setTotalPage(date.total_pages)}).catch(error => console.log(error))
}, [pageNumber])

  return (
    <div>
      <List movieList={films}/>
      <PaginatedItems setPageNumber={setSearchParems} totalPages={totalPages} currentPage={pageNumber - 1} />
    </div>
  )
}

export default Home
