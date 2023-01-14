import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
export default function VideoCard({video}) {
  // console.log(video);

  return (
    <Link to={`/video/${video.id.videoId}`}  state={video}>
    <Card sx={{ maxWidth: 250 ,height:330,overflow:"hidden",bgcolor:"#5d5dbf",color:"white"}}>
      <CardMedia
        component="img"
        // height="200"
        image={video.snippet.thumbnails.medium.url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {video.snippet.title.split(" ").splice(0,6).join(" ")}...
        </Typography>
        <Typography variant="h5"  sx={{width:"100%",color:"darkgray"}}>
          { video.snippet.channelTitle!==""?video.snippet.channelTitle.split(" ").splice(0,4).join(" "):"youtube channel"}... 
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card> 
    </Link>
  );
}
