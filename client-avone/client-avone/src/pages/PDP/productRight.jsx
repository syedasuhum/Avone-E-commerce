import React, { useEffect, useRef, useState, useContext } from 'react';
import "../../assets/css/style.scss";
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContex';

const ProductRight = ({ product }) => {
    const [size, setSize] = useState('M');
    const [quantity, setQuantity] = useState(1);
    // const [totalPrice, setTotalPrice] = useState(0);
    const [productPrice, setProductPrice] = useState(product.price);

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    const interval = useRef();
    const navigate = useNavigate();
    const { addItemToCart } = useContext(CartContext);

    const startTimer = () => {
        const countdownDate = new Date('Aug 30, 2024 00:00:00').getTime();
        interval.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % 1000) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => clearInterval(interval.current);
    }, []);

    useEffect(() => {
        if (product.price && !isNaN(parseFloat(product.price))) {
            setProductPrice(parseFloat(product.price));
        }
    }, [product]);

    // useEffect(() => {
    //     setTotalPrice((productPrice * quantity).toFixed(2));
    // }, [quantity, productPrice]);

    const handleQuantityChange = (action) => {
        if (action === 'increment') {
            setQuantity((prevQuantity) => prevQuantity + 1);
        } else if (action === 'decrement') {
            setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
        }
    };

    const handleCart = () => {
        const cartItem = {
            ...product,
            size,
            quantity,
            totalPrice: parseFloat(productPrice * quantity).toFixed(2)
        };
        addItemToCart(cartItem);
        navigate("/Cartpage");
    };

    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
        const checked = e.target.checked;
        setChecked(checked);
    }

    return (
        <div className="product-details">
            <div className="product-details-title">
                <div className="title">
                    <p className="title-2">{product.title}</p>
                </div>
                <p className="stock-item">
                    <span className="stock">In Stock</span> <span className="item-code">SKU: AV01-D-48</span>
                </p>
                <p className="item-sold"><i className="fa-solid fa-fire-flame-curved"></i>  19 sold in last 17 hours</p>
                <h2>{productPrice}</h2>
            </div>
            <div className="sale-status">
                <div className="sale-title">Hurry up! Sales End In</div>
                <div className="timer">
                    <span>
                        <p className="time">{timerDays}</p>
                        <p className="time-dis">DAYS</p>
                    </span>
                    <span>
                        <p className="time">{timerHours}</p>
                        <p className="time-dis">HRS</p>
                    </span>
                    <span>
                        <p className="time">{timerMinutes}</p>
                        <p className="time-dis">MIN</p>
                    </span>
                    <span>
                        <p className="time">{timerSeconds}</p>
                        <p className="time-dis">SEC</p>
                    </span>
                </div>
            </div>
            <div className="select-item">
                <div className="item-title">
                    <span className="p1">Color:</span>
                    <span className="p2">Khaki</span>
                </div>
                <div className="images">
                    {product.img4 && <img src={product.img4} alt="product-img4" />}
                    {product.img6 && <img src={product.img6} alt="product-img6" />}
                    {product.img8 && <img src={product.img8} alt="product-img8" />}
                </div>
            </div>
            <div className="select-size">
                <div className="selected-size">
                    <div className="item-1">
                        <span className="item-1-title">Size:</span>
                        <span className="item-1-dis">{size}</span>
                    </div>
                    <div className="item-2">
                        <i className="fa-solid fa-ruler-combined"></i> Size Chart
                    </div>
                </div>
                <div className="set-size-items">
                    <span onClick={() => setSize('M')}>M</span>
                    <span onClick={() => setSize('L')}>L</span>
                    <span onClick={() => setSize('XL')}>XL</span>
                </div>
            </div>
            <div className="cart-details">
                <div className="select-information">
                    <div>
                        <span><i className="fa-regular fa-heart"></i></span> <span>Add to Wishlist</span>
                    </div>
                    <div>
                        <span><i className="fa-regular fa-paper-plane"></i></span> <span>Delivery & Returns</span>
                    </div>
                    <div>
                        <span><i className="fa-regular fa-envelope"></i></span> <span>Enquiry</span>
                    </div>
                </div>
                <div className="add-item-to-cart">
                    <div className="quantity">
                        <span onClick={() => handleQuantityChange('decrement')}>-</span>
                        <span>{quantity}</span>
                        <span onClick={() => handleQuantityChange('increment')}>+</span>
                    </div>
                    <button className={`add-to-cart ${checked}`} onClick={handleCart}>ADD TO CART</button>
                </div>
            </div>
            <div className="buy-now">
                <div>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onChange={handleChange} />
                    <label htmlFor="vehicle1" > I agree with the terms and conditions</label>
                </div>
                <button className={`buy-now-button ${checked}`} onClick={handleCart}>BUY IT NOW</button>
            </div>
            <div className="delivary-details">
                <div><i className="fa-solid fa-truck"></i> Spend <span>$199.00</span> more for <span>free shipping</span></div>
                <div><i className="fa-solid fa-clock"></i> Expected Delivery Time : <span>Thursday 30 May - Wednesday 05 June.</span></div>
                <div className="viewars"><i className="fa-solid fa-eye"></i> 27 People looking for this product</div>
            </div>
        </div>
    );
};

export default ProductRight;
