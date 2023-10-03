// import { useState} from 'react'
// import { IPopular } from '../../utils/interfaces';
// import List from '../Home/components/List/List';
// import PaginatedItems from '../../components/Pagination/Pagination';
// import { useSearchParams } from 'react-router-dom';

// const Favourite = () => {

//   const [favourite] = useState<[]|IPopular[]>(() => {
//     const storage = localStorage.getItem("favourite")
//     const data = JSON.parse(storage as string) ?? [];
//     return data;
//   });

// const [searchParems, setSearchParems] = useSearchParams();
// const pageNumber = Number(searchParems.get('page') ?? 1)

//   return (
//     <div>
//           <List movieList={favourite}/>
//       <PaginatedItems setPageNumber={setSearchParems} totalPages={Math.ceil(favourite.length/20)} currentPage={pageNumber - 1} />
//     </div>
//   )
// }

// export default Favourite

import React, { useState, useEffect } from 'react';
import { IPopular } from '../../utils/interfaces';
import List from '../Home/components/List/List';
import PaginatedItems from '../../components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';

const Favourite = () => {
  const [favourite] = useState<[] | IPopular[]>(() => {
    const storage = localStorage.getItem('favourite');
    const data = JSON.parse(storage as string) ?? [];
    return data;
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = Number(searchParams.get('page') ?? 1);
  const itemsPerPage = 20;

  // Calculate the start and end index for the current page
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the 'favourite' array to display only the items for the current page
  const paginatedFavourite = favourite.slice(startIndex, endIndex);

  // Update the URL with the current page number
  useEffect(() => {
    setSearchParams({ page: pageNumber.toString() });
  }, [pageNumber, setSearchParams]);

  return (
    <div>
      <List movieList={paginatedFavourite} />
      <PaginatedItems
        setPageNumber={setSearchParams}
        totalPages={Math.ceil(favourite.length / itemsPerPage)}
        currentPage={pageNumber - 1}
      />
    </div>
  );
};

export default Favourite;

