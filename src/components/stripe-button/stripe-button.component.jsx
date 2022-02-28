import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KY62iSJlqHZzQnboga3SHqJytDcDnPrqHr8WrZKzFPcMNweVBD3oikdtRzFWEFowckBY7BDjkpFEH0ZeowP84xj00U43mwCoc';

  const onToken = token => {
       console.log(token);
       alert ('Payment Successful');
   }

    return(
       <StripeCheckout
         label='Pay Now'
         name='CRWN Clothing Ltd.'
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description={`Your total is $${price}`}
         amount = { priceForStripe }
         panel = 'Pay Now'
         token = {onToken}
         stripeKey={publishableKey}
       />
    );
};

export default StripeCheckoutButton;