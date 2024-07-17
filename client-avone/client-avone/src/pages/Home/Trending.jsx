const Trending = () => {

    const trendingItems = [
        {
            img: 'https://avon-demo.myshopify.com/cdn/shop/products/8_100x.jpg?v=1570425112',
            title: 'Innerbloom Puffer Jacket',
            totalPrice: '$750.00',
            currentPrice: '$479.00',
            category: 'BEST SELLER'
        },
        {
            img: 'https://avon-demo.myshopify.com/cdn/shop/products/2_b453e6ad-c5b6-4a87-acec-7d570d1e28e2_100x.jpg?v=1559885946',
            title: 'Martha Knit Top',
            currentPrice: '$300.00',
            category: 'BEST SELLER'
        },
        {
            img: 'https://avon-demo.myshopify.com/cdn/shop/products/8_d74500ed-dd16-4711-b826-3c25f5651c8a_100x.jpg?v=1616747573',
            title: 'Button Up Top Black',
            currentPrice: '$800.00',
            category: 'BEST SELLER'
        },
        {
            img: 'https://avon-demo.myshopify.com/cdn/shop/products/1_ad3b5994-221c-4300-86d8-9d8cf96459ed_100x.jpg?v=1561438589',
            title: 'Women Shorts',
            currentPrice: '$300.00',
            category: 'POPULAR'
        },
        {
            img: 'https://avon-demo.myshopify.com/cdn/shop/products/4_dcef33e6-b45c-4465-a6cc-9137ddadc91a_100x.jpg?v=1561437914',
            title: 'Moonlight Bay Knit',
            currentPrice: '$250.00',
            category: 'POPULAR'
        },
        {
            img: 'https://avon-demo.myshopify.com/cdn/shop/products/1_45ec2bbf-94ac-4118-b67e-ee0c4ba50515_100x.jpg?v=1560851836',
            title: 'Casual Indigo Shirt',
            currentPrice: '$80.00',
            category: 'POPULAR'
        },
        {
            img: 'https://avon-demo.myshopify.com/cdn/shop/products/1_45ec2bbf-94ac-4118-b67e-ee0c4ba50515_100x.jpg?v=1560851836',
            title: 'Casual Indigo Shirt',
            currentPrice: '$80.00',
            category: 'WEEKLY DEAL'
        },
        {
            img: 'https://avon-demo.myshopify.com/cdn/shop/products/1_92ae5e99-b7ea-4b76-a498-ada80e9fc25a_100x.jpg?v=1560851739',
            title: 'Cargo Pant',
            currentPrice: '$220.00',
            category: 'WEEKLY DEAL'
        },
        {
            img: 'https://avon-demo.myshopify.com/cdn/shop/products/3_ede1edc4-38e6-434e-84b6-020ecf912b6a_100x.jpg?v=1560852028',
            title: 'Men Grey Pants',
            totalPrice: '$750.00',
            currentPrice: '$500.00',
            category: 'WEEKLY DEAL'
        },
        {
            img: 'https://avon-demo.myshopify.com/cdn/shop/products/4_dcef33e6-b45c-4465-a6cc-9137ddadc91a_100x.jpg?v=1561437914',
            title: 'Moonlight Bay Knit',
            currentPrice: '$250.00',
            category: 'BEST RATED'
        },
        {
            img: 'https://avon-demo.myshopify.com/cdn/shop/products/8_d74500ed-dd16-4711-b826-3c25f5651c8a_100x.jpg?v=1616747573',
            title: 'Button Up Top Black',
            currentPrice: '$800.00',
            category: 'BEST RATED'
        },
        {
            img: 'https://avon-demo.myshopify.com/cdn/shop/products/8_100x.jpg?v=1570425112',
            title: 'Innerbloom Puffer Jacket',
            totalPrice: '$750.00',
            currentPrice: '$479.00',
            category: 'BEST RATED'
        }
    ]
    const best_seller = trendingItems.filter((value) => value.category === 'BEST SELLER')
    const popular = trendingItems.filter((value) => value.category === 'POPULAR')
    const weekly_deal = trendingItems.filter((value) => value.category === 'WEEKLY DEAL')
    const best_rated = trendingItems.filter((value) => value.category === 'BEST RATED')
    return (
        <div className="trending">
            <div className="trending-content">
                <h3>BEST SELLER</h3>
                {
                    best_seller.map((value) => {
                        return (
                            <div key={Math.random()} className="trending-items">
                                <img src={value.img} alt="" style={{height:"6rem",width:"6rem"}} />
                                <div>
                                    <p className="title">{value.title}</p>
                                    <div><del>{value.totalPrice}</del> <span>{value.currentPrice}</span></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="trending-content">
                <h3>POPULAR</h3>
                {
                    popular.map((value) => {
                        return (
                            <div key={Math.random()} className="trending-items">
                                <img src={value.img} alt=""  style={{height:"6rem",width:"6rem"}}/>
                                <div>
                                    <p className="title">{value.title}</p>
                                    <div><del>{value.totalPrice}</del> <span>{value.currentPrice}</span></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="trending-content">
                <h3>WEEKLY DEAL</h3>
                {
                    weekly_deal.map((value) => {
                        return (
                            <div key={Math.random()} className="trending-items">
                                <img src={value.img} alt=""  style={{height:"6rem",width:"6rem"}}/>
                                <div>
                                    <p className="title">{value.title}</p>
                                    <div><del>{value.totalPrice}</del> <span>{value.currentPrice}</span></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="trending-content">
                <h3>BEST RATED</h3>
                {
                    best_rated.map((value) => {
                        return (
                            <div key={Math.random()} className="trending-items">
                                <img src={value.img} alt="" style={{height:"6rem",width:"6rem"}} />
                                <div>
                                    <p className="title">{value.title}</p>
                                    <div><del>{value.totalPrice}</del> <span>{value.currentPrice}</span></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Trending;