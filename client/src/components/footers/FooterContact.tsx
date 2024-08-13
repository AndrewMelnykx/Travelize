import React from "react";

import { Box, Typography } from "@mui/material";
import { StyledTextField } from "../../helpers/custom-elements";

const FooterContact = () => {
  return (
    <Box padding={"4rem 6rem"} sx={{ background: "black", color: "white" }}>
      <Box
        className="top"
        display={"flex"}
        alignItems={"center"}
        textAlign={"start"}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDirection={"column"}
        >
          <Typography variant="h3">
            Dear customers, in order to contact us please fill out this form
          </Typography>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            width={"50%"}
          >
            <StyledTextField
              variant="standard"
              label="Login"
              sx={{ margin: "2%" }}
            />
            <StyledTextField variant="standard" label="Password" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { FooterContact };
