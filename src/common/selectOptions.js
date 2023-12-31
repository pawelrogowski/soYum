export const categorySelectOptions = [
  { value: "beef", label: "Beef" },
  { value: "breakfast", label: "Breakfast" },
  { value: "chicken", label: "Chicken" },
  { value: "desserts", label: "Desserts" },
  { value: "goat", label: "Goat" },
  { value: "lamb", label: "Lamb" },
  { value: "miscellaneous", label: "Miscellaneous" },
  { value: "pasta", label: "Pasta" },
  { value: "seafood", label: "Seafood" },
  { value: "side", label: "Side" },
  { value: "starter", label: "Starter" },
  { value: "vegan", label: "Vegan" },
  { value: "pork", label: "Pork" },
  { value: "vegetarian", label: "Vegetarian" },
];

export const ingredientSelectOptions = [
  { value: "to be added", label: "to be added" },
  { value: "asdasd", label: "asdasd" },
  { value: "to be added", label: "to be added" },
  { value: "asdasd", label: "asdasd" },
  { value: "to be added", label: "to be added" },
  { value: "asdasd", label: "asdasd" },
  { value: "to be added", label: "to be added" },
  { value: "asdasd", label: "asdasd" },
  { value: "to be added", label: "to be added" },
  { value: "asdasd", label: "asdasd" },
  { value: "to be added", label: "to be added" },
  { value: "asdasd", label: "asdasd" },
  { value: "to be added", label: "to be added" },
  { value: "asdasd", label: "asdasd" },
  { value: "to be added", label: "to be added" },
  { value: "asdasd", label: "asdasd" },
  { value: "to be added", label: "to be added" },
  { value: "asdasd", label: "asdasd" },
  { value: "to be added", label: "to be added" },
  { value: "asdasd", label: "asdasd" },
  { value: "to be added", label: "to be added" },
  { value: "asdasd", label: "asdasd" },
  { value: "to be added", label: "to be added" },
  { value: "asdasd", label: "asdasd" },
  { value: "to be added", label: "to be added" },
  { value: "asdasd", label: "asdasd" },
  { value: "to be added", label: "to be added" },
  { value: "asdasd", label: "asdasd" },
  { value: "to be added", label: "to be added" },
  { value: "asdasd", label: "asdasd" },
  { value: "to be added", label: "to be added" },
  { value: "asdasd", label: "asdasd" },
  { value: "to be added", label: "to be added" },
  { value: "asdasd", label: "asdasd" },
  { value: "to be added", label: "to be added" },
  { value: "asdasd", label: "asdasd" },
  { value: "to be added", label: "to be added" },
];

export const measureTypeSelectOptions = [
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

export const timeSelectOptions = Array.from({ length: 240 / 5 }, (_, i) => {
  const value = (i + 1) * 5;
  return { value: value.toString(), label: `${value} min` };
});

export const searchFilterOptions = [
  { value: "title", label: "Title" },
  { value: "ingredient", label: "Ingredient" },
];
