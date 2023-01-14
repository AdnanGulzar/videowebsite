import {  Stack,Button } from '@mui/material'
import React from 'react'
import categories from '../../data/category'
const SideBar = ({value}) => {

  return (
    <Stack   direction={{ xs: 'row', md: 'column' }}  bgcolor="#5d5dbf"
    width= {{ xs: 'auto', md: '160px' }}  
    // spacing={{ xs: 2}} 
    sx={{overflow: "auto", padding:"15px",borderTop: "2px solid",color: "white",flexGrow:0,flexShrink:0 ,display:"flex"}}
>
{
  categories.map((category,index)=> <Button key={index} size="medium"  sx={{color:"white",px:3,mx:2}} onClick={()=>{value.setSearch(category)}} >{category}</Button>)
}

      
    </Stack>
  )
}

export default SideBar
