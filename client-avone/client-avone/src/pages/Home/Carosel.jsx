import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const Carosel = () => {
    const caroselImages = [
        {
            img: 'https://avon-demo.myshopify.com/cdn/shop/files/collection-list-1-demo4_300x.jpg?v=1614330616',
            discription: 'MINI DRESS',
            link: '/plp/product-1'
        },
        {
            img: 'https://avon-demo.myshopify.com/cdn/shop/files/women-shoes_300x.jpg?v=1614330616',
            discription: 'SHOES',
            link: '/plp/product-2'
        },
        {
            img: 'https://avon-demo.myshopify.com/cdn/shop/files/mini-skirt_300x.jpg?v=1614331484',
            discription: 'MINI SKIRTS',
            link: '/plp/product-1'
        },
        {
            img: 'https://avon-demo.myshopify.com/cdn/shop/files/collection-list-6-demo4_300x.jpg?v=1614330616',
            discription: 'SUNGLASSES',
            link: '/plp/product-4'
        },
        {
            img: 'https://avon-demo.myshopify.com/cdn/shop/files/tops-new_300x.jpg?v=1614331484',
            discription: 'TOPS',
            link: '/plp/product-1'
        },
        {
            img: 'https://avon-demo.myshopify.com/cdn/shop/files/tops_c89b3b8d-0b69-4c14-9b72-bb83e63354bc_300x.jpg?v=1614331484',
            discription: 'NEW Arrivals',
            link: '/plp/product-1'
        },


    ]
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1354,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 839,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };
    return (
        <div className="hot-sale-carosel">
            <div className="hot-sale-carosel-title">
                <div className="hot-sale-title">HOT SALE COLLECTION</div>
                <div className="hot-sale-title-2">FINAL REDUCTION UP TO 70% OFF</div>
            </div>
            <div>
                <Slider {...settings}>
                    {caroselImages.map((d) => (
                        <div key={Math.random()} className="hot-sale-carosel-items">
                            <Link to={`${d.link}`}>
                                <img src={d.img} alt="" />
                                <div className="carosel-discription">{d.discription}</div>
                            </Link>
                            <button type="button" className=" slick-prev"></button>
                            <button type="button" className=" slick-next "></button>
                        </div>
                    ))}

                </Slider>
            </div>
        </div>
    )
}

export default Carosel;