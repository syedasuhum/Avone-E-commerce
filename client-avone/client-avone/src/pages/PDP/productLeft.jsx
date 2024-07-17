import React from 'react';
import "../../assets/css/style.scss";

const ProductLeft = ({ product }) => {
    return (
        <div className="product-details">
          
            <div className="select-item">
             
                <div className="images">
                    {product.img1 && <img src={product.img1} alt="product-img3" />}
                    {product.img2 && <img src={product.img2} alt="product-img3" />}
                    {product.img3 && <img src={product.img3} alt="product-img3" />}
                    {product.img4 && <img src={product.img4} alt="product-img4" />}
                    {product.img5 && <img src={product.img5} alt="product-img4" />}
                    {product.img6 && <img src={product.img6} alt="product-img4" />}
                    {product.img7 && <img src={product.img7} alt="product-img4" />}
                    {product.img8 && <img src={product.img8} alt="product-img4" />}
                </div>
            </div>
        </div>
    );
};

export default ProductLeft;
