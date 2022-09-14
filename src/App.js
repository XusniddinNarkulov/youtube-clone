import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
   NavBar,
   Feed,
   VideoDetail,
   ChannelDetail,
   SearchFeed,
} from "./components";

function App() {
   return (
      <BrowserRouter>
         <Box sx={{ backgroundColor: "#000" }}>
            <NavBar />
            <Routes>
               <Route path="/" exact element={<Feed />} />
               <Route path="/video/:id" element={<VideoDetail />} />
               <Route path="/channel/:id" element={<ChannelDetail />} />
               <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
         </Box>
      </BrowserRouter>
   );
}

export default App;
