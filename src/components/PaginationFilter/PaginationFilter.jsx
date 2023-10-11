import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Icon } from "../Icon/Icon";
import { StyledDiv } from "./PaginationFilter.styled";

export const PaginationFilter = ({
  currentPage,
  maxPages,
  onPageChange,
  maxPagesToDisplay,
}) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const startPage = Math.max(
    1,
    currentPage - Math.floor(maxPagesToDisplay / 2)
  );
  const endPage = Math.min(maxPages, startPage + maxPagesToDisplay - 1);

  const pagesToDisplay = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => i + startPage
  );

  return (
    <StyledDiv>
      <Link
        className={currentPage > 1 ? "" : "link-disabled"}
        to={currentPage > 1 ? `${currentPage - 1}` : "#"}
        aria-label="previous page"
        onClick={() => {
          if (currentPage > 1) handlePageChange(currentPage - 1);
        }}
      >
        <Icon icon="arrow_slim" />
      </Link>

      <ul>
        {pagesToDisplay.map((page) => (
          <li key={page}>
            <Link
              to={`${page}`}
              className={currentPage === page ? "current-page" : ""}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        className={currentPage !== maxPages ? "" : "link-disabled"}
        to={currentPage < maxPages ? `${currentPage + 1}` : "#"}
        aria-label="next page"
        onClick={() => {
          if (currentPage < maxPages) handlePageChange(currentPage + 1);
        }}
      >
        <Icon icon="arrow_slim" />
      </Link>
    </StyledDiv>
  );
};

PaginationFilter.propTypes = {
  currentPage: PropTypes.number.isRequired,
  maxPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  maxPagesToDisplay: PropTypes.number,
};

export default PaginationFilter;
