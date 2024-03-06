"use client";
import React, { useState } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe with the provided public key
const stripePromise = loadStripe(
  "pk_test_51OrOfrP991lWFWFdIyZHvDhB2mPEgc94PgaEsatHJnHH1BZ5NsKYKvUExRHzA7D4GysVdMTXcMOgB8gIyz5m979c00SZkjWaUJ"
);

// New component for form content
const CheckoutFormContent = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      console.log("Stripe.js has not loaded yet.");
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      // send the paymentMethod or its ID to your server
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

function CheckoutForm() {
  const [showCardElements, setShowCardElements] = useState(false);

  return (
    <div>
      <button onClick={() => setShowCardElements(!showCardElements)}>
        Checkout
      </button>

      {showCardElements && (
        <Elements stripe={stripePromise}>
          <CheckoutFormContent />
        </Elements>
      )}
    </div>
  );
}

export default CheckoutForm;
