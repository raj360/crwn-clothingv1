import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./checkoutStyles.scss";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selector";
// checkout page import
import CheckoutItem from "../../components/checkoutItem/checkoutItemComponent";

import StripeCheckoutButton from "../../components/stripe-button/stripe-buttonComponent";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem cartItem={cartItem} />
    ))}
    <div className="total">
      <span>Total:${total}</span>
    </div>
    <div className="testing-data">
      *please use this info for payment testing 4242 4242 4242 4242 exp: 01/02
      CW 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
