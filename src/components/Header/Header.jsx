import React from 'react'
import {Typography,Box} from "@mui/material"
import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom';
const Header = ({value}) => {
  return (
    <Box  sx={{display: "flex",justifyContent: "space-evenly",alignItems: "center",
    width: "100%",height: "80px",backgroundColor: "#5d5dbf"}}>
<Link to="/">     <Typography variant="h3" color="white" component="h1" >Uove</Typography></Link> 
      <SearchBar value={value}/>

    </Box>    
  )
}

export default Header
