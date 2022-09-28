import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "../utils/fetchingAPI";

const ChannelDetail = () => {
   const { id } = useParams();
   const [channelDetail, setChannelDetail] = useState(null);
   const [videos, setVideos] = useState([]);

   useEffect(() => {
      fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) => {
         // console.log(data);
         setChannelDetail(data?.items[0]);
      });
      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
         (data) => {
            console.log(data);
            setVideos(data?.items);
         }
      );
   }, [id]);

   return (
      <Box minHeight="95vh">
         <Box>
            <div
               style={{
                  backgroundColor: "#00DBDE",
                  backgroundImage:
                     "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
                  backgroundImage:
                     "linear-gradient( 64.5deg,  rgba(245,116,185,1) 14.7%, rgba(89,97,223,1) 88.7% )",
                  zIndex: 10,
                  height: "200px",
               }}
            ></div>

            <ChannelCard channelDetail={channelDetail} marginTop="-123px" />
         </Box>

         <Box p="2%">
            {/* <Box sx={{ mr: { sm: "100px" } }}></Box> */}
            <Videos videos={videos} />
         </Box>
      </Box>
   );
};

export default ChannelDetail;
