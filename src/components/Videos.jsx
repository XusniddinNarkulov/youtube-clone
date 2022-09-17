import React from "react";
import { Stack, Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {
   console.log(videos);
   if (!videos?.length)
      return (
         <CircularProgress
            disableShrink
            sx={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
            }}
         />
      );

   return (
      <Stack
         direction={direction || "row"}
         flexWrap="wrap"
         justifyContent="start"
         gap={2}
      >
         {videos?.map((item, i) => {
            return (
               <Box key={i}>
                  {item.id.videoId && <VideoCard video={item} />}
                  {item.id.channelId && <ChannelCard channelDetail={item} />}
               </Box>
            );
         })}
      </Stack>
   );
};

export default Videos;
