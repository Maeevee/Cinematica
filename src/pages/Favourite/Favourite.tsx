import { useState} from 'react'
import { IPopular } from '../../utils/interfaces';
import List from '../Home/components/List/List';
import PaginatedItems from '../../components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';

const Favourite = () => {

  const [favourite, setFavourite] = useState<[]|IPopular[]>(() => {
    const storage = localStorage.getItem("favourite")
    const data = JSON.parse(storage as string) ?? [];
    return data;
  });

const [searchParems, setSearchParems] = useSearchParams();
const pageNumber = Number(searchParems.get('page') ?? 1)

  return (
    <div>
          <List movieList={favourite}/>
      <PaginatedItems setPageNumber={setSearchParems} totalPages={Math.ceil(favourite.length/20)} currentPage={pageNumber - 1} />
    </div>
  )
}

export default Favourite
