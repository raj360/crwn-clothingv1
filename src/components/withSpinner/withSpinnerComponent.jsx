import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./withSpinnerStyles";

const withSpinner = WrappedComponent => {
  const spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerContainer>
        <SpinnerOverlay />
      </SpinnerContainer>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return spinner;
};

export default withSpinner;
