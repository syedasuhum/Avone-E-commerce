import React, { useRef, useEffect, useState } from 'react';
import '../assets/css/style.scss';

const Payment = () => {
  const paypalRef = useRef();
  const [loaded, setLoaded] = useState(false);
  const clientId = 'AcE1BVYiosOM6Jqib1VY5vWPuyTlaKEdmJUMebIoNkP1r20f5XdlEubU550xgGAi3ohXSQFVJDCEvD_n'; // Replace with your actual PayPal Client ID
  const amount = '10.00';

  const loadPayPalScript = () => {
    return new Promise((resolve, reject) => {
      if (document.getElementById('paypal-sdk')) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.id = 'paypal-sdk';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('PayPal SDK could not be loaded.'));
      document.body.appendChild(script);
    });
  };

  const handleSuccess = (details) => {
    alert('Payment Successful!');
  };

  const handleError = (error) => {
    alert('Payment Failed. Please try again.');
  };

  useEffect(() => {
    loadPayPalScript().then(() => {
      setLoaded(true);
    }).catch(err => {
      console.error(err);
    });
  }, []);

  useEffect(() => {
    if (loaded) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount,
              },
            }],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            handleSuccess(details);
          });
        },
        onError: err => {
          handleError(err);
        },
      }).render(paypalRef.current);
    }
  }, [loaded]);

  return (
    <div className="payment-container">
      <h1>PayPal Payment Integration</h1>
      <div className="paypal-button-wrapper">
        {loaded ? <div id="paypal-button-container" ref={paypalRef} /> : <div className="loading">Loading PayPal Button...</div>}
      </div>
    </div>
  );
};

export default Payment;
