import ReactPaginate from "react-paginate";
import "../../Styles/pagination.css";

const PaginationComponents = () => {
  const handlePageClick = () => {};
  return (
    <div className="main">
      <ReactPaginate
        className="main-paginate"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        pageCount={50}
        previousLabel="<"
        previousClassName="page-item rad-left"
        previousLinkClassName="page-link"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        nextClassName="page-item rad-right"
        nextLinkClassName="page-link"
        activeClassName="active-item"
        activeLinkClassName="active-link"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default PaginationComponents;
