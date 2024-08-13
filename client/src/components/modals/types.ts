import { ChangeEvent } from "react";

interface ModalProps {
  modalTitle: string;
  textTitle: string;
  textReminder: string;
  handleClosing: () => void;
  handleOpening: () => void;
  inputs: CustomInputProps[];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
interface CustomInputProps {
  id: string;
  label: string;
  type: string;
  name: string;
  value: string;

  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type { ModalProps, CustomInputProps };
