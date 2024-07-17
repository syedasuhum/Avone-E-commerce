import React, { useContext } from 'react';
import '../../assets/css/style.scss'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../PDP/CartContex';

const Cartpage = () => {
    const { cartItems, getTotalPrice, updateItemQuantity, removeItemFromCart } = useContext(CartContext);
    const navigate = useNavigate();

    const goCheckout = () => {
        navigate("/Checkout");
    };

    const handleIncreaseQuantity = (itemId) => {
        const item = cartItems.find(item => item.id === itemId);
        updateItemQuantity(itemId, item.quantity + 1);
    };

    const handleDecreaseQuantity = (itemId) => {
        const item = cartItems.find(item => item.id === itemId);
        if (item.quantity > 1) {
            updateItemQuantity(itemId, item.quantity - 1);
        } else {
            removeItemFromCart(itemId);
        }
    };

    const handleRemoveItem = (itemId) => {
        removeItemFromCart(itemId);
    };

    return (
        <div className="cart-page">
            <h1 className="cart-page__title">Your Shopping Cart</h1>
            <div className="cart-page__items">
                {cartItems.map((item, index) => (
                    <div className="cart-page__item" key={index}>
                        <img src={item.img2} alt="Product" className="cart-page__item-image" />
                        <div className="cart-page__item-details">
                            <h2 className="cart-page__item-name">{item.title}</h2>
                            <p className="cart-page__item-price">${(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                            <p className="cart-page__item-quantity">
                                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                                {item.quantity}
                                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                            </p>
                            <p className="cart-page__item-size">Size: {item.size}</p>
                            <button className="cart-page__remove-button" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-page__summary">
                <h2>Total: ${getTotalPrice().toFixed(2)}</h2>
                <button className="cart-page__checkout-button" onClick={goCheckout}>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cartpage;
