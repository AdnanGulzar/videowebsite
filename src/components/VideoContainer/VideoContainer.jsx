import { Button,Stack ,Typography} from '@mui/material'
import React from 'react'
import VideoCard from "./VideoCard"
import axios from "axios"
import {FadeLoader} from "react-spinners"

const VideoContainer = ({value}) => {

    const [videos,setVideos]=React.useState([])
       const [ppage,setPpage]=React.useState("CDIQAQ")
       const [npage,setNpage]=React.useState("CDIQAA")
       const [page,setpage]=React.useState("CDIQAQ")
    const [loading,setLoading]=React.useState(true)
   
    React.useEffect(()=>{
async function  myf(){
                setVideos([])
            setLoading(true)
     let res =await axios.request({
      method: 'GET',
      url: 'https://youtube-v31.p.rapidapi.com/search',
      params: {
        q:value.search,
        part: 'snippet,id',
        regionCode: 'PK',
        maxResults: '30',
        order: 'date',
        pageToken: page
      },
      headers: {
        'X-RapidAPI-Key': 'd4a3ec30eemshbb1f33273d839a6p11a9d7jsn9d83fd5a908d',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    })
    //  let data=await res.json()
    
     setVideos(res.data.items)
     setNpage(res.data.nextPageToken)
     setPpage(()=>{return res.data.prevPageToken?res.data.prevPageToken:"CDIQAQ"})
     setLoading(false)

    }
    myf()
          
    },[value.search,page])
    let videojsx=videos&&videos.length>0&&videos.map((video,index)=><VideoCard key={index} video={video}/>)
   
  return (<div style={{display:"flex",flexDirection:"column" }}>
  <Typography variant="h3" color="white">{value.search}</Typography>
    <Stack direction="row" justifyContent="center" sx={{flexWrap: "wrap", gap:"10px",marginTop:4}}>
    {loading&&<div className="mainloader"><FadeLoader/></div>}
    {videojsx}
  
    </Stack>
    <div className="center">
    <Button variant="outlined" onClick={()=>{
      setpage(ppage)       
    }} >Previous</Button>
    <Button variant="outlined" onClick={()=>{
      setpage(npage)       
    }} >Next</Button>
    
    </div>
   
    </div>
  )
}

export default VideoContainer
