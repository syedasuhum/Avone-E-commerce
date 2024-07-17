
import React, { createContext, useState } from 'react';
// import { CartContext } from '../PDP/CartContex';

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlistItems');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    // const { addItemToCart } = useContext(CartContext);

    const addItemToWishlist = (item, size) => {
        setWishlistItems((prevItems) => {
            if (!prevItems.some(wishlistItem => wishlistItem.id === item.id && wishlistItem.size === size)) {
                const updatedItems = [...prevItems, { ...item, size }];
                localStorage.setItem('wishlistItems', JSON.stringify(updatedItems));
                return updatedItems;
            }
            return prevItems;
        });
    };

    const removeItemFromWishlist = (itemId, size) => {
        setWishlistItems((prevItems) => {
            const updatedItems = prevItems.filter(item => item.id !== itemId || item.size !== size);
            localStorage.setItem('wishlistItems', JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    const clearWishlist = () => {
        setWishlistItems([]);
        localStorage.removeItem('wishlistItems');
    };

    return (
        <WishlistContext.Provider value={{ wishlistItems, addItemToWishlist, removeItemFromWishlist, clearWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export default WishlistProvider;
