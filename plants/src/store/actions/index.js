import axios from "axios";

export const FETCH_PLANT_START = "FETCH_PLANT_START";
export const FETCH_PLANT_SUCCESS = "FETCH_PLANT_SUCCESS";
export const FETCH_PLANT_FAILURE = "FETCH_PLANT_FAILURE";

export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_PLANT_START });
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=82w0xBgOv4kXatqfoOipenZiyZtAxKoN60T5Ih1j7m8",
        { headers: { "Access-Control-Allow-Origin": "https://trefle.io" } }
      )
      .then((res) => {
        dispatch({ type: FETCH_PLANT_SUCCESS, payload: res.Data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FETCH_PLANT_FAILURE, payload: err });
      });
  };
};
