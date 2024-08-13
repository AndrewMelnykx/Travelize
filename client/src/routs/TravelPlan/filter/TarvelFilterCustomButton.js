import React, { useState, useCallback } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";
import { fetchTicketsDataThunk } from "@redux/slices/actions-slice";
import SendIcon from "@mui/icons-material/Send";
import { UseStoreDispatcher } from "@redux/store/store";
import { useNavigate } from "react-router-dom";
const TravelFilterCustomButton = ({ departureCity, arrivalCity, departureDate, returnDate, passengersQuantity, }) => {
    const [loading, setLoading] = useState(false);
    const dispatch = UseStoreDispatcher();
    const navigate = useNavigate();
    const handleSuccessfulFetch = () => {
        setLoading(false);
        navigate("/tickets");
    };
    const handleTicketsFetching = useCallback(async () => {
        try {
            const result = await dispatch(fetchTicketsDataThunk({
                departureCity: departureCity,
                arrivalCity: arrivalCity,
                departureDate: departureDate,
                returnDate: returnDate,
                adults: passengersQuantity.toString(),
            }));
            console.log("result:", result);
        }
        catch (error) {
            console.error("Failed to fetch tickets", error);
            toast.error("Something went wrong!");
        }
        finally {
            handleSuccessfulFetch();
        }
    }, [
        departureCity,
        arrivalCity,
        departureDate,
        returnDate,
        passengersQuantity,
    ]);
    const handleClick = () => {
        setLoading(true);
        handleTicketsFetching();
    };
    return (React.createElement(Box, { sx: { "& > button": { m: 1 }, mt: "-20%" } },
        React.createElement(LoadingButton, { onClick: handleClick, endIcon: React.createElement(SendIcon, null), loading: loading, loadingPosition: "end", variant: "contained", sx: {
                backgroundColor: "white",
                color: "black",
                "&:hover": {
                    backgroundColor: "gray",
                },
                "&.MuiLoadingButton-loading": {
                    backgroundColor: "gray",
                    color: "black",
                },
            } },
            React.createElement("span", null, "Search"))));
};
export default TravelFilterCustomButton;
