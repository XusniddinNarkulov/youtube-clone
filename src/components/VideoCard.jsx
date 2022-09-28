import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { decode } from "html-entities";

import {
   demoChannelTitle,
   demoChannelUrl,
   demoThumbnailUrl,
   demoVideoTitle,
   demoVideoUrl,
} from "../utils/constants";

const VideoCard = ({
   video: {
      id: { videoId },
      snippet,
   },
}) => {
   return (
      <Card
         sx={
            {
               // width: { xs: "100%", sm: "358px", md: "320px" }
            }
         }
      >
         <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia
               image={snippet?.thumbnails?.high?.url}
               alt={snippet?.title}
               sx={{
                  // width: { xs: "100%", sm: "358px", md: "320px" },
                  height: 180,
               }}
            />
         </Link>

         <CardContent sx={{ backgroundColor: "#1e1e1e", marginBottom: "-3%" }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
               <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  color="white"
                  className="card-content"
               >
                  {decode(snippet?.title) || demoVideoTitle}
               </Typography>
            </Link>

            <Link
               to={
                  snippet?.channelId
                     ? `/channel/${snippet?.channelId}`
                     : demoChannelUrl
               }
            >
               <Typography variant="caption" fontWeight="bold" color="gray">
                  {snippet?.channelTitle || demoChannelTitle}
                  <CheckCircle
                     sx={{
                        fontSize: 12,
                        color: "gray",
                        ml: "5px",
                        verticalAlign: "middle",
                     }}
                  />
               </Typography>
            </Link>
         </CardContent>
      </Card>
   );
};

export default VideoCard;
