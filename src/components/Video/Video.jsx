import React from "react";
import { Box } from "@mui/material";
import {  useLocation } from "react-router-dom";

const Video = () => {
  // const param = useParams();
  const param1 = useLocation();
  console.log(param1.state)


  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "90vh",
          // flexDirection: "column",
          // gap:"1rem",
          // marginTop: "10px"
        }}  >
       

        <iframe
          className="iframe"
          style={{ border: "none" }}
          title="video"
          src={`https://www.youtube.com/embed/${param1.state.id.videoId}`}
        ></iframe>
        
      </Box>
    </>
  );
};

export default Video;
