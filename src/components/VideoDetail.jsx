import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";

import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchingAPI";

const VideoDetail = () => {
   const { id } = useParams();
   const [videoDetail, setVideoDetail] = useState(null);
   const [videos, setVideos] = useState(null);

   useEffect(() => {
      fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
         console.log(data);
         setVideoDetail(data.items[0]);
      });

      fetchFromAPI(
         `search?part=snippet&relatedToVideoId=${id}&type=video`
      ).then((data) => {
         setVideos(data.items);
      });
   }, [id]);

   if (!videoDetail?.snippet) return <CircularProgress disableShrink />;

   const {
      snippet: { title, channelId, channelTitle },
      statistics: { viewCount, likeCount },
   } = videoDetail;

   return (
      <Box minHeight="95vh">
         <Stack direction={{ xs: "column", md: "row" }}>
            <Box width={{ md: "130%", xl: "100%" }}>
               <Box
                  sx={{
                     width: "100%",
                     position: "sticky",
                     top: "86px",
                  }}
               >
                  <ReactPlayer
                     url={`https://www.youtube.com/watch?v=${id}`}
                     className="react-player"
                     controls
                  />

                  <Typography
                     color="white"
                     variant="h5"
                     fontWeight="bold"
                     p={2}
                     // marginTop={{ sm: "-5%"}}
                  >
                     {title}
                  </Typography>

                  <Stack
                     direction="row"
                     justifyContent="space-between"
                     sx={{ color: "white" }}
                     py={1}
                     px={2}
                     mt="-2%"
                  >
                     <Link to={`/channel/${channelId}`}>
                        <Typography
                           variant={{ sm: "subtitle1", md: "subtitle2" }}
                           color="white"
                        >
                           {channelTitle}{" "}
                           <CheckCircle
                              sx={{
                                 fontSize: "12px",
                                 color: "gray",
                                 ml: "5px",
                                 verticalAlign: "middle",
                              }}
                           />
                        </Typography>
                     </Link>

                     <Stack direction="row" gap="20px" alignItems="center">
                        <Typography variant="body1" sx={{ opacity: 0.7 }}>
                           {viewCount} views
                        </Typography>

                        <Typography variant="body1" sx={{ opacity: 0.7 }}>
                           {likeCount} likes
                        </Typography>
                     </Stack>
                  </Stack>
               </Box>
            </Box>

            <Box
               px={2}
               py={{ md: 1, xs: 5 }}
               justifyContent="center"
               alignItems="center"
               overflow="scroll"
            >
               <Videos videos={videos} direction="column" />
            </Box>
         </Stack>
      </Box>
   );
};

export default VideoDetail;
