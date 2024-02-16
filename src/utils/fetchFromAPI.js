//Utility function to fetch API data
import axios from 'axios';         //specify get request using axios

const BASE_URL = 'https://youtube-v31.p.rapidapi.com' ;
//https://youtube-v31.p.rapidapi.com/captions
const options = {
    params: {
      maxResults : 50,
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,  //access key for the api
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'                     //The host can be left untouched but the key must be safely secured
    }
  };

  //function that allows us to call this API, pass the dynamic url and then call it within any compoenent in our application
export const fetchFromAPI = async (url) => {        // a function going to accept only parameter which is going to be a url
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);           // whatever request we make we always want to start with base url
    return data;
};