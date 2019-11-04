import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_3dA62gQqenheCaTwMyKWEY9d00xxUHEEtH";

  const onToken = token => {
    console.log(token);
    alert("payment successfull");
  };

  return (
    <StripeCheckout
      label="pay now"
      name="clothings for everybody"
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
