import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Select from "react-select";

import { baseButtonMotion } from "../../../common/animations";
import { setSearchFilter } from "../../../redux/slices/searchSlice";
import { Button } from "../../Button/Button";
import { StyledForm } from "./SearchForm.styled";

export const SearchForm = ({
  onChange,
  onSubmit,
  placeholder,
  variant,
  filter,
  filterOptions,
  filterPlaceholder,
}) => {
  const dispatch = useDispatch();

  const onFilterChange = (e) => {
    dispatch(setSearchFilter(e.value));
  };

  return (
    <StyledForm $variant={variant} onSubmit={onSubmit}>
      <div>
        <label htmlFor="search">search</label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder={placeholder}
          onChange={onChange}
          aria-labelledby="search"
        />
        <Button variant={variant} type="submit" aria-label="Submit Search" {...baseButtonMotion}>
          Search
        </Button>
      </div>
      {filter && (
        <div className="select-container">
          <span>Search by:</span>
          <div>
            <Select
              openMenuOnFocus
              openMenuOnClick
              closeMenuOnSelect
              escapeClearsValue
              isSearchable={false}
              unstyled
              classNamePrefix="Select"
              options={filterOptions}
              placeholder={filterPlaceholder}
              onChange={(e) => onFilterChange(e)}
              inputId="search-filter-select"
            />
          </div>
        </div>
      )}
    </StyledForm>
  );
};

SearchForm.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  filter: PropTypes.bool,
  filterOptions: PropTypes.array,
  filterPlaceholder: PropTypes.string,
  variant: PropTypes.string,
};
