import React, { useContext, useState } from 'react';
import '../../assets/css/style.scss';
import { CartContext } from '../PDP/CartContex';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, getTotalPrice } = useContext(CartContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    paymentMethod: 'CreditCard'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.paymentMethod !== 'PayPal') {
      navigate("/Payments", { state: { billingDetails: formData } });
    }else{
      navigate("/Payment")
    }
  };

  return (
    <div className="checkout">
      <div className="checkout-form-container">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone No.</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="zip">ZIP Code</label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="paymentMethod">Payment Method</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
            >
              <option value="CreditCard">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="COD">COD</option>
            </select>
          </div>
          <button type="submit">Pay Now</button>
        </form>
      </div>
      <div className="cart-details-container">
        <div className="cart-details">
          <h2>Cart Details</h2>
          <div className="cart-items">
            {cartItems?.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.img2} alt="Product" className="cart-item-image" />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.title}</h3>
                  <p className="cart-item-price">${item.totalPrice}</p>
                  <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                  <p className="cart-item-size">Size: {item.size}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="total-price">
            <h3>Total: ${getTotalPrice()}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
