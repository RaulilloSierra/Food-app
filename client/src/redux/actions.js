import {
  GET_RECIPES,
  ADD_RECIPE,
  GET_DIETS,
  FILTER_BY_DIET,
  FILTER_BY_ORIGIN,
  ORDER_BY,
  NAME_SUCCESS,
  NAME_FAILURE,
} from "./actions.type";
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

export const orderBy = (order) => {
  return {
    type: ORDER_BY,
    payload: order,
  };
};

export const filterByDiet = (diets) => {
  return {
    type: FILTER_BY_DIET,
    payload: diets,
  };
};

export const filterbyOrigin = (origin) => {
  return {
    type: FILTER_BY_ORIGIN,
    payload: origin,
  };
};

export const searchByName = (name) => {
  return async (dispatch) => {
    const endpoint = `http://localhost:3001/recipes?name=${name}`;
    try {
      const { data } = await axios(endpoint);
      dispatch(nameSuccess(data));
    } catch (error) {
      dispatch(nameFailure(`No recipe found with the name "${name}"`));
    }
  };
};

export const nameSuccess = (name) => {
  return {
    type: NAME_SUCCESS,
    payload: name,
  };
};
export const nameFailure = (error) => {
  return {
    type: NAME_FAILURE,
    payload: error,
  };
};
