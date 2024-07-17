import React, { useContext, useState } from 'react';
import { WishlistContext } from './WishlistContext';
import { CartContext } from '../PDP/CartContex';
import { AiOutlineClose } from 'react-icons/ai';
import "../../assets/css/style.scss"

const Wishlist = () => {
    const { wishlistItems, removeItemFromWishlist } = useContext(WishlistContext);
    const { addItemToCart } = useContext(CartContext);

    const [selectedSizes, setSelectedSizes] = useState({});

    const handleSizeChange = (itemId, size) => {
        setSelectedSizes(prev => ({ ...prev, [itemId]: size }));
    };

    const handleMoveToCart = (item) => {
        const selectedSize = selectedSizes[item.id] || item.size || 'M'; 
        const cartItem = { ...item, size: selectedSize, price: parseFloat(item.price) }; // Convert price to a number
        removeItemFromWishlist(item.id, item.size);
        addItemToCart(cartItem);
    };

    return (
        <div className="wishlist">
            <h2>My Wishlist</h2>
            <div className="wishlist-items">
                {wishlistItems.length === 0 ? (
                    <p>No items in wishlist</p>
                ) : (
                    wishlistItems.map(item => (
                        <div key={`${item.id}-${item.size}`} className="wishlist-item">
                            <img src={item.img1} alt={item.title} className="wishlist-item-image" />
                            <div className="wishlist-item-details">
                                <h3>{item.title}</h3>
                                <p>Price: {item.price}</p>
                                <div className="size-selection">
                                    <label htmlFor={`size-${item.id}`}>Size:</label>
                                    <select
                                        id={`size-${item.id}`}
                                        value={selectedSizes[item.id] || item.size}
                                        onChange={(e) => handleSizeChange(item.id, e.target.value)}
                                    >
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                    </select>
                                </div>
                                <div className="wishlist-button">
                                    <button className="move-to-cart" onClick={() => handleMoveToCart(item)}>Move to Cart</button>
                                    <button className="remove-button" onClick={() => removeItemFromWishlist(item.id, item.size)}>
                                        <AiOutlineClose />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Wishlist;
