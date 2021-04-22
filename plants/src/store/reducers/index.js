import {
  FETCH_PLANT_SUCCESS,
  FETCH_PLANT_START,
  FETCH_PLANT_FAILURE,
} from "../actions/index";

const initialState = {
  isLoading: false,
  plants: { data: [] },
  error: "",
};

export const reducer = (state = initialState, action) => {
  console.log(action, action.payload);
  switch (action.type) {
    case FETCH_PLANT_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PLANT_SUCCESS:
      console.log("state and action", state, action);
      return {
        ...state,
        isLoading: false,
        plants: action.payload,
      };
    case FETCH_PLANT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
