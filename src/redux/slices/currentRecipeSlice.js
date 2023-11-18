import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Salmon Avocado Salad",
    ImageUrl: "",
    categories: ["", ""],
    about:
      "Is a healthy salad recipe that’s big on nutrients and flavor. A moist, pan seared salmon is layered on top of spinach, avocado, tomatoes, and red onions. Then drizzled with a homemade lemon vinaigrette.",
    cookingTime: "20 min",
    ingredients: [
      { id: "1", ingredient: "Salmon", amount: "2", measureType: "ts" },
      { id: "2", ingredient: "Avocado", amount: "4", measureType: "mashed" },
      { id: "3", ingredient: "Cucumber", amount: "4", measureType: "pound" },
      { id: "4", ingredient: "Spinach", amount: "11.5", measureType: "tsp" },
      { id: "5", ingredient: "Mint Leaves", amount: "1", measureType: "finely diced" },
      { id: "6", ingredient: "Lime", amount: "3", measureType: "tsp" },
      { id: "7", ingredient: "Honey", amount: "11.5", measureType: "" },
      { id: "8", ingredient: "Olive Oil", amount: "11.5", measureType: "tsp" },
    ],
    preparationSteps: [
      "Season the salmon, then rub with oil.",
      "Mix the dressing ingredients together. ",
      "Halve, stone, peel and slice the avocados. Halve and quarter the cucumber lengthways, then cut into slices.",
      "Divide salad, avocado and cucumber between four plates, then drizzle with half the dressing.",
      "Heat a non-stick pan. Add the salmon and fry for 3-4 mins on each side until crisp but still moist inside. ",
      "Put a salmon fillet on top of each salad and drizzle over the remaining dressing. Serve warm.",
    ],
  },
];

export const currentRecipeSlice = createSlice({
  name: "currentRecipe",
  initialState: { ...initialState },
  reducers: {},
});

export default currentRecipeSlice.reducer;
