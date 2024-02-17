import React,{ useState,useEffect } from "react";
import { useParams } from "react-router-dom";   //used to access the parameters from the current route in a React component.
//particularly useful for creating dynamic routes and components that can respond to different parameters in the URL.
import {Box}  from "@mui/material";

import {Videos, ChannelCard} from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const {id} = useParams();      //destructure the id and through useParams we can get the id
  
  useEffect(() => {
    const fetchResults = async () => {            //responsible for fetching data from the YouTube API using the fetchFromAPI utility function.
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      //The first API call is made to channels with the specified parameters (part=snippet&id=${id}). It fetches information about the YouTube channel based on the provided id.
      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      //The second API call is made to search with parameters (channelId=${id}&part=snippet%2Cid&order=date). It fetches a list of videos associated with the specified channel.
      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(155,52,75,1) 0%, rgba(253,29,29,1) 53%, rgba(253,194,29,1) 100%)',   //https://cssgradient.io/
          zIndex: 10,
          height: '300px'
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr: { sm: '100px'}}} />
          <Videos videos={videos} />
      </Box>
    </Box>  
  )
}

export default ChannelDetail
