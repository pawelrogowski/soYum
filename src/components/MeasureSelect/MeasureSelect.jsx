import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Select from "react-select";

import { setAmount, setMeasure } from "../../redux/slices/addRecipeFormSlice";
import { StyledDiv } from "./MeasureSelect.styled";

const options = [
  { value: "tbs", label: "tbs" },
  { value: "tsp", label: "tsp" },
  { value: "kg", label: "kg" },
  { value: "g", label: "g" },
  { value: "cup", label: "cup" },
  { value: "oz", label: "oz" },
  { value: "lb", label: "lb" },
  { value: "ml", label: "ml" },
  { value: "l", label: "l" },
];

export const MeasureSelect = ({ index }) => {
  const { recipeIngredients } = useSelector((state) => state.addRecipeForm);
  const dispatch = useDispatch();

  const handleAmountChange = (e) => {
    dispatch(setAmount({ index: index, amount: e.target.value }));
  };

  const handleMeasureChange = (option) => {
    dispatch(setMeasure({ index: index, measureType: option.value }));
  };

  return (
    <StyledDiv>
      <input
        name="amount"
        type="number"
        value={recipeIngredients[index].amount ? recipeIngredients[index].amount : ""}
        onChange={handleAmountChange}
        aria-label="amount"
        placeholder="5"
      />
      <Select
        onChange={handleMeasureChange}
        options={options}
        placeholder="tsp"
        unstyled
        classNamePrefix="Select"
        value={
          recipeIngredients[index].measureType
            ? {
                value: recipeIngredients[index].measureType,
                label: recipeIngredients[index].measureType,
              }
            : null
        }
      />
    </StyledDiv>
  );
};

MeasureSelect.propTypes = {
  index: PropTypes.number.isRequired,
};
