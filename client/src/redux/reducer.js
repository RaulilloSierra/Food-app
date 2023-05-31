import { GET_RECIPES, ADD_RECIPE, GET_DIETS } from "./actions.type";

const initialState = {
  recipes: [],
  allRecipes: [],
  typeDiets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
        allRecipes: [...state.allRecipes, action.payload],
      };

    case GET_DIETS:
      return {
        ...state,
        typeDiets: action.payload,
      };

    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
