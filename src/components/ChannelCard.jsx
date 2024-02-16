//the ChannelCard component is designed to display information about a YouTube channel, including the channel's profile picture, title, and subscriber count. 
//The component is styled using Material-UI components and handles navigation through a Link component. 
//Default values or placeholders are provided through constants in case the actual channel information is not available.

import { Box , CardContent , CardMedia , Typography} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";   //create links for navigating to other pages.
// ?. chaining operator for handling error situations

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail}) => (
  <Box
   sx={{
     boxShadow: 'none',
     borderRadius: '20px',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     width : {xs : '356px', md : '320px'},
     height: '326px',
     margin: 'auto'
   }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{display: 'flex' , flexDirection : 'column' , justifyContent : 'center' , textAlign: ' center' , color: '#fff'}}>
        <CardMedia 
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt ={channelDetail?.snippet?.title}
          sx={{borderRadius:  '50%' , height: '180px' , width: '180px' , mb: 2, border: '1px solid #e3e3e3'}}
        />
        <Typography variant= 'h6' >
           {channelDetail?.snippet?.title}
           <CheckCircle sx={{fontSize : 14, color:'gray', ml:'5px' }}/>
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>
        )}
      </CardContent>       
    </Link>
  </Box>
)

export default ChannelCard