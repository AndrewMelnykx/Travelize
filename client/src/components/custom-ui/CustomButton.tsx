import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";
import { fetchHotelsDataThunk } from "@redux/slices/actions-slice";
import { useSelector } from "react-redux";
import SendIcon from "@mui/icons-material/Send";
import { adultsSelector } from "@redux/selectors/components-selectors";
import { UseStoreDispatcher } from "@redux/store/store";

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
        })
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
    <Box sx={{ "& > button": { m: 1 } }} ml={10}>
      <LoadingButton
        onClick={handleClick}
        endIcon={<SendIcon />}
        loading={loading}
        loadingPosition="end"
        variant="contained"
        sx={{
          backgroundColor: "white",
          color: "black",
          "&:hover": {
            backgroundColor: "gray",
          },
          "&.MuiLoadingButton-loading": {
            backgroundColor: "gray",
            color: "black",
          },
        }}
      >
        <span>Send</span>
      </LoadingButton>
    </Box>
  );
}
