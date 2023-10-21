import { StyledSelect } from "./MeasureSelect.styled";
const options = [
  { value: "tbs", label: "tbs" },
  { value: "tsp", label: "tsp" },
  { value: "kg", label: "kg" },
  { value: "g", label: "g" },
];
export const MeasureSelect = () => {
  return (
    <StyledSelect
      openMenuOnFocus
      unstyled
      classNamePrefix="Select"
      options={options}
      placeholder="kg"
    />
  );
};
