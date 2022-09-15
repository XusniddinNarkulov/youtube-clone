import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
   params: {
      maxResults: "50",
   },
   headers: {
      "X-RapidAPI-Key": "16c44be1efmsh44f5951daad4473p14f8d1jsndfeaf754abe0",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
   },
};

export const fetchFromAPI = async (url) => {
   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
   return data;
};
