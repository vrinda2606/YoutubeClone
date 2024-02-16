import {useState , useEffect} from 'react';
import {Box, Stack, Typography} from '@mui/material';  //typography is used for all text elements instead of p tags and headings
import { fetchFromAPI } from "../utils/fetchFromAPI";
import {Sidebar,Videos} from './';


const Feed = () => {
  
  const [selectedCategory , setSelectedCategory] = useState('New');
  const [videos ,setVideos] = useState([]);

//since fetchfromAPI is an asynchronous function which returns a promise to we have to add a .then function to be able to get data
  useEffect( () => {
    fetchFromAPI(`search?part=snippet&q==${selectedCategory}`)          //to extract the data use the .then function which executes when we call this function
    .then((data) => setVideos(data.items) )
  },[selectedCategory]);
//this code snippet is using the useEffect hook to fetch data from an API based on the selectedCategory variable. When the data is retrieved, it updates the videos state, triggering a re-render of the component. The effect will only run when selectedCategory changes.

  return (
    //dynamic devices stack direction based on screen size
    <Stack sx={{flexDirection: {sx: 'column', md: 'row'}}}>
        <Box sx={{height: {sx: 'auto' , md: '92vh'},          // md symbolises medium devices
                  borderRight: '1px solid #3d3d3d',
                  px: {sx: 0, md: 2}          //px --> padding
                  }}> 
        <Sidebar 
          selectedCategory = {selectedCategory}
          setSelectedCategory = {setSelectedCategory}
        />
        <Typography className='copyright' variant='body2' sx={{mt: 1.5,      //margin top <--- mt
        color: '#fff'}}>
          © 2023 Copyright Developed
        </Typography>
        </Box>
        
        <Box p={2} sx={{overflowY:'auto', height:'90vh', flex: 2}}>
          <Typography variant='h4' 
                      fontWeight="bold" 
                      mb={2}                                  //mb--> margin bottom
                      sx={{color:'white'}}>
            {selectedCategory} <span style={{color: '#FC1503'}}>Videos</span>
          </Typography>

          <Videos videos={videos}/>
        </Box>
    </Stack>
  )
}

export default Feed
