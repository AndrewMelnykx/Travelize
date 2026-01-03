import * as React from "react";
import { useSelector } from "react-redux";

import { adultsSelector } from "@store/selectors/components-selectors";
import { UseStoreDispatcher } from "@store/index";
import { fetchHotelsDataThunk } from "@store/slices/actions-slice";

import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import { toast } from "react-toastify";
import { darkPurpleColor } from "@helpers/constants";

export default function LoadingButtonsTransition({ city }: { city: string }) {
  const [loading, setLoading] = React.useState(false);
  const selectAdultsState = useSelector(adultsSelector);
  const dispatch = UseStoreDispatcher();

  const fetchHotels = async () => {
    try {
      const response = await dispatch(
        fetchHotelsDataThunk({
          cityName: city.toString(),
          adultsQuantity: selectAdultsState.toString(),
        }),
      );
    } catch (error) {
      console.error("Error fetching hotels:", error);
      toast.error("Failed to fetch hotels");
    } finally {
      setLoading(false);
    }
  };

  function handleClick() {
    setLoading(true);
    fetchHotels();
  }

  return (
    <Box sx={{ "& > button": { m: 1 }, mt: { sm: 3, md: 1 }, mb: { sm: 2, md: -4 } }}>
      <LoadingButton
        onClick={handleClick}
        endIcon={<SendIcon />}
        loading={loading}
        loadingPosition="end"
        variant="contained"
        sx={{
          backgroundColor: "transparent",
          color: "white",
          boxShadow: "1px 1px 1px 1px black",
          fontSize: "1rem",
          width: { md: "10rem", sm: "8rem" },
          "&:hover": {
            backgroundColor: "transparent",
            color: "gold",
          },
          "&.MuiLoadingButton-loading": {
            backgroundColor: "gray",
            color: "black",
            boxShadow: "0.5px 0.5px 0.5px 0.5px black",
          },
        }}
      >
        <span>Send</span>
      </LoadingButton>
    </Box>
  );
}
