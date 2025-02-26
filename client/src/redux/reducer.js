import {
  GET_RECIPES,
  ADD_RECIPE,
  GET_DIETS,
  ORDER_BY,
  FILTER_BY_DIET,
  FILTER_BY_ORIGIN,
  NAME_SUCCESS,
  NAME_FAILURE,
  AWAIT_BY,
  GET_RECIPES_BY_ID,
} from "./actions.type";

const initialState = {
  recipes: [],
  allRecipes: [],
  typeDiets: [],
  error: "",
  loading: true,
  detail: [],
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
        loading: false,
      };

    case FILTER_BY_DIET: {
      const allRecipes = state.allRecipes;
      const dietFilter =
        action.payload === "All"
          ? allRecipes
          : allRecipes.filter((recipe) =>
              recipe.diets.map((r) => r.name).includes(action.payload)
            );
      return {
        ...state,
        recipes: dietFilter,
      };
    }

    case FILTER_BY_ORIGIN: {
      let recipesFilter = [];
      if (action.payload === "All") {
        recipesFilter = state.allRecipes;
      }
      if (action.payload === "DB") {
        recipesFilter = state.allRecipes.filter((e) => e.createDb);
      }
      if (action.payload === "API") {
        recipesFilter = state.allRecipes.filter((e) => !e.createDb);
      }
      return {
        ...state,
        recipes: recipesFilter,
      };
    }
    case ORDER_BY: {
      const orderRecipe = [...state.recipes];
      if (action.payload === "asc") {
        orderRecipe.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (action.payload === "des") {
        orderRecipe.sort((a, b) => b.name.localeCompare(a.name));
      }
      if (action.payload === "hasc") {
        orderRecipe.sort((a, b) => a.health_score - b.health_score);
      }
      if (action.payload === "hdes") {
        orderRecipe.sort((a, b) => b.health_score - a.health_score);
      }
      return {
        ...state,
        recipes: orderRecipe,
      };
    }

    case AWAIT_BY:
      return {
        ...state,
        loading: true,
      };

    case GET_RECIPES_BY_ID:
      return {
        ...state,
        detail: action.payload,
      };

    case NAME_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        error: "",
        loading: false,
      };

    case NAME_FAILURE:
      return {
        ...state,
        recipes: [],
        error: action.payload,
        loading: false,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
