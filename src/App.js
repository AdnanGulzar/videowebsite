
import { Stack } from '@mui/material';
import './App.css';
import React from "react"
import Video from './components/Video/Video';
import Header from './components/Header/Header';
import SideBar from './components/SideBar.jsx/SideBar';
import VideoContainer from './components/VideoContainer/VideoContainer';
import {BrowserRouter,Routes ,Route} from "react-router-dom" 


function App() {
  const [search,setSearch]=React.useState("All")
  return (
   <><BrowserRouter>
    <Header value={{search:search,setSearch:setSearch}}/>
    <Routes>
        <Route path='/' element={  <Stack direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 2 }} sx={{margin:"10px"}} >
    <SideBar  value={{search:search,setSearch:setSearch}}/>
    <VideoContainer  value={{search:search,setSearch:setSearch}} />
    </Stack>} />
    <Route path='/video/:videoid' element={<Video/>}/>
    </Routes>

  
    </BrowserRouter>
   </>
  );
}

export default App;  
