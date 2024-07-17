import React from "react";
import { Carousel } from "react-responsive-carousel";
const Carosel = () => {
    const caroselData = [
        {
            img1: 'https://avon-demo.myshopify.com/cdn/shop/products/1_ad3b5994-221c-4300-86d8-9d8cf96459ed_350x.jpg?v=1561438589',
            img2: 'https://avon-demo.myshopify.com/cdn/shop/products/6_1436d4cd-cab1-41e2-b61c-cb659d54f29e_350x.jpg?v=1561438589',
            title: 'Women Shorts',
            currentPrice: "$300.00",
            class: [
                {
                    item: 'black'
                },
                {
                    item: 'sage'
                }
            ]
        },
        {
            img1: 'https://avon-demo.myshopify.com/cdn/shop/products/4_dcef33e6-b45c-4465-a6cc-9137ddadc91a_350x.jpg?v=1561437914',
            img2: 'https://avon-demo.myshopify.com/cdn/shop/products/1_761993f7-4c94-4c0c-9982-380474442645_350x.jpg?v=1561437914',
            title: 'Moonlight Bay Knit',
            currentPrice: "$250.00",
            class: [
                {
                    item: 'blue'
                },
                {
                    item: 'pink'
                },
                {
                    item: 'khaki'
                }
            ]
        },
        {
            img1: 'https://avon-demo.myshopify.com/cdn/shop/products/1_45ec2bbf-94ac-4118-b67e-ee0c4ba50515_350x.jpg?v=1560851836',
            img2: 'https://avon-demo.myshopify.com/cdn/shop/products/3_7cc960a5-808d-4234-8f05-28b6a5dd0f3f_350x.jpg?v=1560851838',
            title: 'Casual Indigo Shirt',
            currentPrice: "$80.00",
        }
    ]
    return (
        <div>
            <Carousel>
                {
                    caroselData.map((value,index) => {
                        return (
                            <div key={`carosel-plp-${index}`} className="plp-carosel">
                                <img src={value.img1} alt="" />
                                <div className="plp-carosel-title">{value.title}</div>
                                <div className="plp-carosel-price">{value.currentPrice}</div>
                                
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}
export default Carosel;