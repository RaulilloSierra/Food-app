import { GET_RECIPES, ADD_RECIPE, GET_DIETS } from "./actions.type";
import axios from "axios";

export const addRecipe = (recipe) => {
  const endpoint = "http://localhost:3001/recipes";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, recipe);
      return dispatch({
        type: ADD_RECIPE,
        payload: data,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const getDiets = () => {
  const endpoint = "http://localhost:3001/diets";
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({
        type: GET_DIETS,
        payload: data,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const getRecipes = () => {
  const endpoint = "http://localhost:3001/recipes";
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({
        type: GET_RECIPES,
        payload: data,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
};
