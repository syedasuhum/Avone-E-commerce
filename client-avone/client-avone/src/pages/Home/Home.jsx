import React, { useEffect, useState, useContext } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import home1 from '../../assets/Images/home1.webp';
import home2 from '../../assets/Images/home2.webp';
import '../../assets/css/style.scss';
import axios from 'axios';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import Carosel from './Carosel';
// import Followus from './followUs';
import Trending from './Trending';
import { WishlistContext } from '../Wishlist/WishlistContext';
// import { Link } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [women, setWomen] = useState([]);
    const [notification, setNotification] = useState({ message: '', visible: false });
    const navigate = useNavigate();
    const { addItemToWishlist } = useContext(WishlistContext);

    useEffect(() => {
        axios.get('http://localhost:3001/women')
            .then(response => {
                setWomen(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };
    const handleplpClick = (id) => {
        navigate(id);
    };

    const handleWishlistClick = (item, event) => {
        event.stopPropagation();
        addItemToWishlist(item);
        setNotification({ message: 'Product saved to the wishlist', visible: true });

        setTimeout(() => {
            setNotification({ message: '', visible: false });
        }, 2000);
    };

    return (
        <div className="home">
            {notification.visible && (
                <div className="notification">
                    {notification.message}
                </div>
            )}
            <Carousel
                showThumbs={false}
                interval={3000}
                transitionTime={1000}
                autoPlay
                infiniteLoop
                stopOnHover
            >
                <div className="carousel__slide">
                    <img src={home1} alt="Slide 1" />
                    <div className="carousel__content">
                        <button className="carousel__button">WOMEN COLLECTIONS</button>
                        <div className="carousel__text">DAILY <br /> STANDARDS</div>
                         <button  className="carousel_sec_button" onClick={() => handleplpClick('/plp/product-1')}>EXPLORE NOW</button>
                    </div>
                </div>
                <div className="carousel__sec_slide">
                    <img src={home2} alt="Slide 2" />
                    <div className="carousel__sec_content">
                        <button className="carousel__button">NEW ARRIVALS</button>
                        <div className="carousel__text">THE CLASSIC</div>
                        <button  className="carousel_sec_img_button" onClick={() => handleplpClick('/plp/product-5')}>DISCOVER NOW</button>
                      
                    </div>
                </div>
            </Carousel>
            <div className="products">
                {products.slice(0, 3).map((product, index) => {
                    let positionClass = '';
                    if (index === 0) positionClass = 'bottom-right';
                    if (index === 1) positionClass = 'top-left';
                    if (index === 2) positionClass = 'bottom-left';
                    return (
                        <div key={product.id} className={`product-card ${positionClass}`} onClick={() => handleProductClick(product.id)}>
                            <img src={product.img} alt={product.name} className="product-image" />
                            <div className="product-details">
                                <h2 className="product-title">{product.title}</h2>
                                <p className="product-text">{product.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='women'>
                <h2>Women Collection</h2>
                <div className='women_toggle'>
                    <h3>NEW ARRIVALS</h3>
                    <h3>BEST SELLER</h3>
                    <h3>TOP RATED</h3>
                </div>
                <div className='women_col'>
                    {women.slice(0, 4).map((item) => (
                        <div key={item.id} className="product-card" onClick={() => handleProductClick(item.id)}>
                            <div className="image-container">
                                <img src={item.img1} alt="img1" className="women-image women-image-primary" />
                                <img src={item.img2} alt="img2" className="women-image women-image-secondary" />
                                <div className="icon-container">
                                    <AiOutlineHeart className="wishlist-icon" onClick={(event) => handleWishlistClick(item, event)} />
                                    <AiOutlineShoppingCart className="cart-icon" />
                                    <AiOutlineSearch className="search-icon" />
                                </div>
                            </div>
                            <div className="women-details">
                                <p className="women-title">{item.title}</p>
                                <p className="women-text">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Carosel />
            <Trending />
            {/* <Followus /> */}
        </div>
    );
}

export default Home;
