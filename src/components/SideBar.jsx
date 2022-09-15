import React, { useState } from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
   return (
      <Stack
         direction="row"
         sx={{
            overflowY: "auto",
            height: { sx: "auto", md: "95%" },
            flexDirection: { md: "column" },
         }}
      >
         {categories.map(({ icon, name }, key) => (
            <button
               key={key}
               className="category-btn"
               style={{
                  background: name === selectedCategory && "#fc1503",
                  color: "white",
               }}
               onClick={() => {
                  setSelectedCategory(name);
               }}
            >
               <span
                  style={{
                     color: name === selectedCategory ? "white" : "red",
                     marginRight: "15px",
                  }}
               >
                  {icon}
               </span>
               <span>{name}</span>
            </button>
         ))}
      </Stack>
   );
};

export default SideBar;
