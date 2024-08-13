import { City } from "@redux/types";
import { SyntheticEvent } from "react";

interface CustomAutocompleteProps {
  handleChangeOfTheInput: (
    event: SyntheticEvent<Element, Event>,
    newInputValue: string
  ) => void;
  setOptionsForInputs: (options: City[]) => void;
  setValueForInput: (
    event: SyntheticEvent<Element, Event>,
    selectedCity: City | null
  ) => void;
  label: string;
  options: City[];
  value: City | null;
}

export type { CustomAutocompleteProps };
