import ReactPaginate from 'react-paginate';

interface Props {setPageNumber: any, totalPages: number, currentPage: number}

function PaginatedItems({ setPageNumber, totalPages, currentPage }:Props) {

    const handlePageClick = (event : any) => {
        setPageNumber({page: event.selected + 1})
    };

    return (
        <>
            <ReactPaginate className={styles.pagination}
                pageCount={totalPages}
                forcePage={currentPage}
                onPageChange={handlePageClick}
                breakLabel="..."
                nextLabel="next >"
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                pageRangeDisplayed={pageRange}
                marginPagesDisplayed={marginPages}
                containerClassName="pagination"
                activeClassName={styles.active}
                breakClassName={styles.item}
                breakLinkClassName={styles.link}
                pageClassName={styles.item}
                pageLinkClassName={styles.link}
                previousClassName={styles.previous}
                previousLinkClassName={styles.link}
                nextClassName={styles.next}
                nextLinkClassName={styles.link}
            />
        </>
      );
    }

    export default PaginatedItems
