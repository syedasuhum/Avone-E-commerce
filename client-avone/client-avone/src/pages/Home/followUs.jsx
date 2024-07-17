import React from "react";
const Followus = () => {
    const follow=[
        {
            img:'https://scontent.cdninstagram.com/v/t51.29350-15/433713825_314762484954164_6446435291032561401_n.webp?stp=dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=DbqSGlilawMQ7kNvgFZi2hj&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYAyEksrmfGbMu2ypBvOlTE4aZLk2DmrGSYC67l_tr7x7w&oe=6650ABF6'
        },
        {
            img:'https://scontent.cdninstagram.com/v/t51.29350-15/433527110_1428042661419980_4215446653708411755_n.webp?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=btkBG5LhbGsQ7kNvgHAsqkm&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCNJrm-X0Fd7mlgXE5Jz5nidIjK1dQIKdgeSOYaqTMo1w&oe=6650CF35'
        },
        {
            img:'https://scontent.cdninstagram.com/v/t51.29350-15/433554821_2695065713977476_5171498129655464239_n.webp?stp=dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=ddp6wF2l7e8Q7kNvgHx9o7X&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDEja2uj6l1BC6dljw9xDzozWqXfHmqy7i51ppgJ43o4g&oe=6650AC5C'
        },
        {
            img:'https://scontent.cdninstagram.com/v/t51.29350-15/434125850_267289883100836_5229969724713150685_n.webp?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=skxTcQjv1JwQ7kNvgGI0LwG&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYBvRp5z3v2xeYcCcAuDSAqhQBuQefhEH15XIHemumwdwQ&oe=6650B4AD'
        },
        {
            img:'https://scontent.cdninstagram.com/v/t51.29350-15/433766825_1251321975825006_1012561923946571128_n.webp?stp=dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=R1R36nBvB1cQ7kNvgHPR4LO&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDKuzqKz2wOz33nvpZIopj2wCRjVuDqaHrcgCJFPacLDw&oe=6650B777'
        },
        {
            img:'https://scontent.cdninstagram.com/v/t51.29350-15/433666491_741955554726927_1959456334652907885_n.webp?stp=dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=T6vYEW3l7m4Q7kNvgFOKplk&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYA8qymNIJL_-tozYAdmExISnSJo0DTTU1eEj-IpRipDnQ&oe=6650D299'
        },
        {
            img:'https://scontent.cdninstagram.com/v/t51.29350-15/433707766_337945682585184_3173666931350751559_n.webp?stp=dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=IaYrGhWpwowQ7kNvgE36LXs&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYD44mmVBlorwwogf6ZQ7nUwtblqGp3PSefB8_B7_wMZEg&oe=6650D8E0'
        },
        {
            img:'https://scontent.cdninstagram.com/v/t51.29350-15/433811553_980154737026639_3101581637858274096_n.webp?stp=dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=Zu3TFQzqtb0Q7kNvgGfZDOp&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCdwMpEOOf-I3fcdbKFt-tPs94cR3yd3w8VxDAwuehGww&oe=6650CC1B'
        },
        {
            img:'https://scontent.cdninstagram.com/v/t51.29350-15/433522120_7541748809225457_2695145989221699154_n.webp?stp=dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=dU8polWgFw4Q7kNvgEQJLZS&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDIYbXgQ__4pRBbwWJedqUiK3e9Ud3Ju6fMuDncX-va-Q&oe=6650AF33'
        },
        {
            img:'https://scontent.cdninstagram.com/v/t51.29350-15/433846899_936300281407857_1265615901410002584_n.webp?stp=dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=F1EM41wRXdgQ7kNvgGeJ4AE&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYAuyGSiRq6c7YYRMeLM4yUuk7NDPZHRddEglwjjUFw6lA&oe=6650C0D6'
        }
    ]
    return (
        <div className="follow-us">
            <div className="follow-us-title">
                <div className="follow-us-main-title">FOLLOW US</div>
                <div className="follow-us-text">@avonshopishop</div>
            </div>
            <div className="follow-us-items">
                {
                    follow.map((value)=>{
                        return(
                            <div key={Math.random()}>
                                <img src={value.img} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Followus;