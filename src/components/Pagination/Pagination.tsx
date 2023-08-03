import ReactPaginate from 'react-paginate';

interface Props {setPageNumber: any, totalPages: number, currentPage: number}

function PaginatedItems({ setPageNumber, totalPages, currentPage }:Props) {

    const handlePageClick = (event : any) => {
        setPageNumber({page: event.selected + 1})
    };

    return (
        <>
          <ReactPaginate
            pageCount={totalPages}
            forcePage={currentPage}
            onPageChange={handlePageClick}
            breakLabel="..."
            nextLabel="next >"
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            pageRangeDisplayed={2}
            marginPagesDisplayed={4}
            containerClassName="pagination"
            activeClassName="active"
            breakClassName="item"
            breakLinkClassName="link"
            pageClassName="item"
            pageLinkClassName="link"
            previousClassName="item"
            previousLinkClassName="link"
            nextClassName="item"
            nextLinkClassName="link"
          />
        </>
      );
    }

    export default PaginatedItems
