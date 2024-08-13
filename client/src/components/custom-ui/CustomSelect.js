import React from "react";
import { Select, MenuItem, InputLabel, FormControl, } from "@mui/material";
import { UseStoreDispatcher } from "@redux/store/store";
import { useSelector } from "react-redux";
import { adultsSelector } from "@redux/selectors/components-selectors";
import { FilterActions } from "@redux/slices/filter-slice";
import { adultsSelectOptionsData } from "@data/static-data/inputs-data";
const CustomSelect = ({ label, labelId, }) => {
    const dispatch = UseStoreDispatcher();
    const selectAdultsState = useSelector(adultsSelector);
    const handleSettingAdults = (event) => {
        dispatch(FilterActions.handleSelectAdultState(event.target.value));
    };
    return (React.createElement(FormControl, { sx: { marginTop: "10%", minWidth: 120 } },
        React.createElement(InputLabel, { id: "filter-select-label", sx: { color: "white" } }, label),
        React.createElement(Select, { labelId: labelId, onChange: handleSettingAdults, value: selectAdultsState, label: label, sx: {
                mb: "2%",
                borderBottom: "1px solid white",
                fontSize: "1.1rem",
                backgroundColor: "black",
                color: "white",
                "& .MuiSelect-icon": {
                    color: "white",
                },
                "& .MuiSelect-select": {
                    color: "white",
                },
                "& .MuiInputLabel-root": {
                    color: "white",
                },
            }, MenuProps: {
                PaperProps: {
                    sx: {
                        backgroundColor: "black",
                        color: "white",
                        "& .MuiMenuItem-root": {
                            color: "white",
                            backgroundColor: "black",
                            "&:hover": {
                                backgroundColor: "gray",
                            },
                        },
                    },
                },
            } }, adultsSelectOptionsData.map((item) => (React.createElement(MenuItem, { key: item.id, value: item.value, sx: {
                fontSize: "1.5rem",
                background: "inherit",
                color: "white",
            } }, item.label))))));
};
export default CustomSelect;
