import Creatable from "react-select/creatable";

import { Icon } from "../Icon/Icon";
import { MeasureSelect } from "../MeasureSelect/MeasureSelect";
import { StyledDiv } from "./IngredientSelect.styled";
const options = [
  { value: "tbs", label: "tbs" },
  { value: "tsp", label: "tsp" },
  { value: "kg", label: "kg" },
  { value: "g", label: "g" },
];
export const IngredientSelect = () => {
  return (
    <StyledDiv>
      <div>
        <Creatable
          openMenuOnFocus
          unstyled
          classNamePrefix="Select"
          formatCreateLabel={(inputValue) => `${inputValue}`}
          options={options}
          placeholder="ingredient"
        />
        <MeasureSelect />
      </div>
      <button type="button" aria-label="remove ingredient">
        <Icon icon="x" />
      </button>
    </StyledDiv>
  );
};
