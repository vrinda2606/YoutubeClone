//the VideoCard component is designed to display video information in a styled card, including the video thumbnail, title, and channel details.
//It uses Material-UI components and handles navigation through Link components. 
//The default values or placeholders are provided through constants in case the actual video information is not available.

import {Link} from 'react-router-dom';        //to create links to navigate between pages.
import { Typography , Card , CardContent , CardMedia} from '@mui/material';   //components used for styling and structuring the card.
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl , demoVideoUrl , demoVideoTitle , demoChannelUrl , demoChannelTitle} from '../utils/constants';  //These constants likely represent default values or placeholders for video information.

//snippet is an object representing information about a video. It is passed as a prop to the VideoCard component. 
const VideoCard = ({video : {id : {videoId},snippet } }) => {
  return (
    // The Link tag creates a clickable link if video id exists otherwise it will redirect to the demo video page.
    <Card sx={{width : {xs : '100%', sm:'358px', md : '320px' },boxShadow:'none' , borderRadius : 0}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia 
            image={snippet?.thumbnails?.high?.url}             //It is extracted from the snippet object, specifically from the thumbnails property, then the high property, and finally, the url property. The ?. is the optional chaining operator, ensuring that if any intermediate property is null or undefined, the whole expression will gracefully return undefined instead of causing an error.
            alt= {snippet?.title} 
            sx={{width: {
              xs: '100%' , sm: '358px', md:'320px'
            } , height: 180}}/>
      </Link>
      <CardContent sx={{backgroundColor:'#1e1e1e',height: '106px'}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant='subtitle1' fontWeight='Bold' color='#fff'>
          {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId? `/channel/${snippet?.channelId}`: demoChannelUrl}>
        <Typography variant='subtitle2' fontWeight='Bold' color='gray'>
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{fontSize : 12, color:'gray', ml:'5px' }}/>
        </Typography>
      </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard