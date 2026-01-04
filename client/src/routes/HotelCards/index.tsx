import React, { useState } from "react";
import { useSelector } from "react-redux";
import { hotelsDataSelector } from "@store/selectors/data-selectors";

import CardTemplate from "./template";
import HotelFilter from "./Filter";

import { Box, Button, useMediaQuery } from "@mui/material";
import { ToastContainer } from "react-toastify";
import SearchIcon from "@mui/icons-material/Search";

import "react-toastify/dist/ReactToastify.css";
import { darkPurpleColor } from "@helpers/constants";

const HotelCards: React.FC = () => {
  const [city, setCity] = useState("");
  const hotelsDataState = useSelector(hotelsDataSelector);
  const isSmallScreen = useMediaQuery("(max-width:768px)");
  const [isFilterVisible, setIsFilterVisible] = useState(!isSmallScreen);

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };
  const handleFilterVisibility = () => {
    setIsFilterVisible(prev => !prev);
  };

  const hasCards = hotelsDataState.length > 0;
  const ifFilterIsInvisibleAndScreenIsSmall = isSmallScreen && !isFilterVisible;
  const isFilterVisibleOrNotSmallScreen = isFilterVisible || !isSmallScreen;

  return (
    <Box
      display="flex"
      flexDirection={isSmallScreen ? "column" : "row"}
      alignItems={isSmallScreen ? "center" : hasCards ? "flex-start" : "center"}
      justifyContent={isSmallScreen ? "center" : hasCards ? "flex-start" : "center"}
      sx={{ background: "black", minHeight: "100vh", transition: "all 0.3s ease", p: 2 }}
    >
      {isFilterVisibleOrNotSmallScreen && (
        <Box
          sx={{
            flex: hasCards ? "0 1 260px" : "0 0 420px",
            minWidth: hasCards ? "350px" : "320px",
            height: hasCards ? "340px" : "390px",
            mt: hasCards ? "20%" : "5%",
            transition: "all 0.3s ease",
          }}
        >
          <HotelFilter
            city={city}
            handleCityChange={handleCityChange}
            handleFilterVisibility={handleFilterVisibility}
          />
        </Box>
      )}

      {ifFilterIsInvisibleAndScreenIsSmall && (
        <Button
          onClick={() => setIsFilterVisible(true)}
          sx={{
            color: "white",
            borderColor: "transparent",
            "&:hover": { color: darkPurpleColor, borderColor: "transparent" },
            mb: 2,
            alignSelf: "flex-start",
          }}
        >
          <SearchIcon sx={{ fontSize: "2rem" }} />
        </Button>
      )}

      {hasCards && (
        <Box
          sx={{
            flex: 1,
            mt: isSmallScreen ? "25%" : "7%",
            ml: isSmallScreen ? 15 : 4,
            width: "100%",
          }}
        >
          {ifFilterIsInvisibleAndScreenIsSmall && (
            <Button
              onClick={handleFilterVisibility}
              sx={{
                color: "white",
                borderColor: "transparent",
                "&:hover": { color: darkPurpleColor, borderColor: "transparent" },
                mb: 2,
                position: "static",
                left: "0",
                top: "0",
              }}
            >
              <SearchIcon sx={{ fontSize: "2rem" }} />
            </Button>
          )}
          <Box
            mt={{ xs: "-25%", md: "0" }}
            display="grid"
            gap={2}
            gridTemplateColumns={{
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            }}
          >
            {hotelsDataState.map(hotel => (
              <CardTemplate hotel={hotel} key={hotel.hotel.hotelId} />
            ))}
          </Box>
        </Box>
      )}

      <ToastContainer />
    </Box>
  );
};

export default HotelCards;
