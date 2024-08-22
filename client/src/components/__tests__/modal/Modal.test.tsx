import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import CustomModal from "@modals/Modal";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({
  authorization: {
    isLoginVisible: false,
  },
});

describe("CustomModal", () => {
  const mockOnClosing = jest.fn();
  const mockOnOpening = jest.fn();
  const mockOnChange = jest.fn();
  const mockOnArrayInputChange = jest.fn();
  const defaultProps = {
    modalTitle: "Test Modal",
    textTitle: "Please enter your email",
    textReminder: "Remember to submit",
    handleClosing: mockOnClosing,
    handleOpening: mockOnOpening,
    handleChange: mockOnChange,
    inputs: [
      {
        id: "email",
        name: "email",
        label: "Email",
        type: "email",
        value: "",
        onChange: mockOnArrayInputChange,
      },
    ],
  };

  it("Renders the modal with correct content", () => {
    render(
      <Provider store={store}>
        <CustomModal {...defaultProps} />
      </Provider>
    );
    expect(screen.getByText(/Test Modal/i)).toBeInTheDocument();
    expect(screen.getByText(/Please enter your email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  });

  it("Closes modal when buttons are clicked", () => {
    render(
      <Provider store={store}>
        <CustomModal {...defaultProps} />
      </Provider>
    );
    const loginButton = screen.getByRole("button", { name: /Login/i });
    fireEvent.click(loginButton);
    expect(defaultProps.handleOpening).toHaveBeenCalled();

    expect(screen.getByText(/Cancel/i)).toBeInTheDocument();
    const cancelButton = screen.getByRole("button", { name: /Cancel/i });
    fireEvent.click(cancelButton);
    expect(defaultProps.handleClosing).toHaveBeenCalled();
  });

  it("Submits the form and logs the email", () => {
    render(
      <Provider store={store}>
        <CustomModal {...defaultProps} />
      </Provider>
    );
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "test@example.com" },
    });
    const submitButton = screen.getByRole("button", { name: /Submit/i });
    fireEvent.click(submitButton);
    expect(defaultProps.handleClosing).toHaveBeenCalled();
  });
});
