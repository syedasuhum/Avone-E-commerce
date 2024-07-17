import React, { useContext, useState } from 'react';
import '../../assets/css/style.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../PDP/CartContex';

const Payments = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const billingDetails = location.state?.billingDetails;
    const { clearCart } = useContext(CartContext);
    const [paymentData, setPaymentData] = useState({
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvc: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentData({
            ...paymentData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Place Order or Process Payment
        const formData = { ...billingDetails, ...paymentData };
        clearCart();
        alert("Order Placed Successfully");
        navigate("/");
    };

    const handlePlaceOrder = () => {
        // Handle place order for COD
        clearCart();
        alert("Order Placed Successfully");
        navigate("/");
    };

    return (
        <div className="payment-page">
            <h1 className="payment-page__title">Payment Information</h1>
            <div className="payment-content">
                {/* Billing Details */}
                {billingDetails && (
                    <div className="billing-details">
                        <h3>Billing Details</h3>
                        <p>Name: <span>{billingDetails.firstName} {billingDetails.lastName}</span></p>
                        <p>Phone: <span>{billingDetails.phone}</span></p>
                        <p>Address: <span>{billingDetails.address}</span></p>
                        <p>City: <span>{billingDetails.city}</span></p>
                        <p>State: <span>{billingDetails.state}</span></p>
                        <p>ZIP Code: <span>{billingDetails.zip}</span></p>
                        <p>Payment Method: <span>{billingDetails.paymentMethod}</span></p>
                        {billingDetails.paymentMethod === 'COD' && (
                            <button 
                                className="payment-form__submit"
                                onClick={handlePlaceOrder}
                            >
                                Place Order
                            </button>
                        )}
                    </div>
                )}

                {/* Payment Form - Render only if payment method is not COD */}
                {billingDetails && billingDetails.paymentMethod !== 'COD' && (
                    <form className="payment-form" onSubmit={handleSubmit}>
                        <div className="payment-form__group">
                            <label htmlFor="cardNumber" className="payment-form__label">Card Number</label>
                            <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                className="payment-form__input"
                                placeholder="Enter Card Number"
                                value={paymentData.cardNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="payment-form__group">
                            <label htmlFor="cardName" className="payment-form__label">Cardholder Name</label>
                            <input
                                type="text"
                                id="cardName"
                                name="cardName"
                                className="payment-form__input"
                                placeholder="Enter Card Holder Name"
                                value={paymentData.cardName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="payment-form__group payment-form__group--inline">
                            <div className="payment-form__group--small">
                                <label htmlFor="expiryDate" className="payment-form__label">Expiry Date</label>
                                <input
                                    type="text"
                                    id="expiryDate"
                                    name="expiryDate"
                                    className="payment-form__input"
                                    placeholder="MM/YY"
                                    value={paymentData.expiryDate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="payment-form__group--small">
                                <label htmlFor="cvc" className="payment-form__label">CVC</label>
                                <input
                                    type="text"
                                    id="cvc"
                                    name="cvc"
                                    className="payment-form__input"
                                    placeholder="123"
                                    value={paymentData.cvc}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="payment-form__submit">Pay Now</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Payments;
