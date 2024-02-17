import {useState , useEffect} from 'react';
import {Box, Typography} from '@mui/material';  //typography is used for all text elements instead of p tags and headings
import { fetchFromAPI } from "../utils/fetchFromAPI";
import {Videos} from './';
import { useParams } from 'react-router-dom';


const SearchFeed = () => {

  const [videos ,setVideos] = useState([]);
  const { searchTerm } = useParams();

 useEffect( () => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)         
    .then((data) => setVideos(data.items) )
  },[searchTerm]);

  return (
    <Box p={2} sx={{overflowY:'auto', height:'90vh', flex: 2}}>
      <Typography variant='h4' 
                  fontWeight="bold" 
                  mb={2}                                  //mb--> margin bottom
                  sx={{color:'white'}}>
        Search Results for:  <span style={{color: '#FC1503'}}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed;