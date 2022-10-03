import { giphyListActions } from "./index";
import axios from "axios";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const response = await axios.get(
        "https://api.giphy.com/v1/gifs/trending?api_key=l6AFNzj7hZEfLI3bSiF1AR0sVyZHwQbu&limit=50&rating=g"
      );
      const gifData = response.data.data;

      return gifData;
    };
    try {
      const gifData = await fetchHandler();
      console.log(gifData);
      if (gifData) {
        dispatch(giphyListActions.replaceData(gifData));
      }
    } catch (err) {
      throw new Error({ message: "Something went wrong!" });
    }
  };
};

export const searchchData = (query) => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=l6AFNzj7hZEfLI3bSiF1AR0sVyZHwQbu&q=${query}&limit=25&offset=0&rating=g&lang=en`
      );
      const searchData = response.data.data;

      return searchData;
    };
    try {
      const searchData = await fetchHandler();
      console.log(searchData);
      if (searchData) {
        dispatch(giphyListActions.replaceData(searchData));
      }
    } catch (err) {
      throw new Error({ message: "Something went wrong!" });
    }
  };
};
