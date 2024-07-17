import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductRight from "./productRight";
import ProductLeft from "./productLeft";
// import Product from "./Product";
import "../../assets/css/style.scss";
import ProductDetails from './ProductDetails';

const ProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch('http://localhost:3001/women');
                const data = await response.json();
                // Assuming data itself is the array of products
                const productData = data.find(item => item.id === (productId));
                setProduct(productData);
            } catch (error) {
                console.error("Failed to fetch product data", error);
            }
        };

        fetchProduct();
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="product-page">
            <div className="product-page-left">
                <ProductLeft product={product} />
            </div>
            <div className="product-page-right">
                <ProductRight product={product} />
            </div>
        </div>
        <ProductDetails />
        </>
    
    );
};

export default ProductPage;
