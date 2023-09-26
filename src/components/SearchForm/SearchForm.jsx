import { StyledForm } from "./SearchForm.styled";
import { Button } from "../Button/Button";
import PropTypes from "prop-types";

export const SearchForm = ({ onChange, onSubmit, placeholder, variant }) => {
  return (
    <StyledForm $variant={variant} onSubmit={onSubmit}>
      <label htmlFor="search">search</label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder={placeholder}
        onChange={onChange}
        aria-labelledby="search"
        aria-describedby="search-instructions"
      />
      <Button variant={variant} type="submit" aria-label="Submit Search">
        Search
      </Button>
      <p id="search-instructions">
        Enter a search term and press Enter to search
      </p>
    </StyledForm>
  );
};

SearchForm.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  variant: PropTypes.string,
};
