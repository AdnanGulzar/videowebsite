import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


export default function CustomizedInputBase({value}) {
  const [svalue,setSvalue]=React.useState("")
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: {xs:200,sm:300,lg:400} }}
    >
     
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search a Video"
        inputProps={{ 'aria-label': 'Search a Video' }}
        value={svalue}
        onChange={(e)=>{setSvalue(e.target.value)}}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" 
      onClick={()=>{
        if(svalue==="") alert("Please Write someting to search")
        else value.setSearch(svalue)}}
      >
        <SearchIcon />
      </IconButton>
     
    </Paper>
  );
}
