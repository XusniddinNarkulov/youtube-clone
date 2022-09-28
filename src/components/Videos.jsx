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
      <div
         style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            // flexDirection: `${direction || "row"}`,
         }}
      >
         {videos?.map((item, i) => {
            return (
               <Box key={i}>
                  {item.id.channelId && <ChannelCard channelDetail={item} />}
                  {item.id.videoId && <VideoCard video={item} />}
               </Box>
            );
         })}
      </div>
   );

   return (
      <Stack
         direction={direction || "row"}
         flexWrap="wrap"
         justifyContent="center"
         gap={2}
      >
         {videos?.map((item, i) => {
            return (
               <Box key={i}>
                  {item.id.videoId && (
                     <div
                        style={{
                           display: "grid",
                           gridTemplateColumns:
                              "repeat(auto-fit, minmax(300px,350px))",
                           justifyContent: "center",
                           alignItems: "center",
                           width: "100%",
                           margin: "0, auto",
                        }}
                     >
                        <VideoCard video={item} />
                     </div>
                  )}
                  {item.id.channelId && <ChannelCard channelDetail={item} />}
               </Box>
            );
         })}
      </Stack>
   );
};

export default Videos;
