import { useEffect, useState } from "react"

const Navdropdown = ({ dropDownhome, showDropdown,dropDown,dropDownshop,dropDownfeatures,dropDowncollection,dropDownwomen,lookBook,pages,blog }) => {
    const [collectionShop,setCollectionShop]=useState([])
    const [shopImages,setShopImages]=useState([])
    const [collectionWomen,setCollectionWomen]=useState([])
    const [womenNewarrivals,setWomenNewarrivals]=useState([])
    useEffect(()=>{
        const collection=dropDownshop.filter((val)=>val.subCategory==='collectionShop')
        setCollectionShop(collection)
        const shopImages=dropDownshop.filter((val)=>val.subCategory==='shopnow')
        setShopImages(shopImages)
        const womenCollection=dropDownwomen.filter((val)=>val.subCategory==='collection')
        setCollectionWomen(womenCollection)
        const newArrivals=dropDownwomen.filter((val)=>val.subCategory==='new-arrival')
        setWomenNewarrivals(newArrivals)
    },[dropDownshop, dropDownwomen])
    return (
        <div className="nav-dropdown" onMouseEnter={showDropdown}>
            <div className={dropDown === 'dropDownhome' ? 'active ' : 'inactive'}>
                <div className="home-dropdown ">
                    {
                        dropDownhome?.map((value) => {
                            return (
                                <div key={Math.random()}>
                                    <img src={value.img} alt="" />
                                    <h3>{value.title}</h3>
                                </div>
                               
                            )
                        })
                    }
                </div>

            </div>
             <div className={dropDown === 'dropDownshop' ? 'active' : 'inactive'} >
                <div className="shop-dropdown">
                    <div className="shop-items">
                        {
                            collectionShop?.map((value,index) => {
                                return (
                                    <div key={`shop-${index}`} className="shop-collection-item">
                                        <h3>{value.title}</h3>

                                        {
                                            value.collection?.map((value,index) => {
                                                return (
                                                    <p key={`shop-data-${index}`}>{value.item}</p>
                                                )
                                            })
                                        }

                                    </div>
                                    
                                )
                            })
                        }
                    </div>
                    <div className="images">
                        {
                            shopImages?.map((value,index) => {
                                return (
                                    <img src={value?.img} alt="" key={`images-${index}`} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={dropDown === 'dropDownfeatures' ? 'active' : 'inactive'}>
                <div className="features">
                    {
                        dropDownfeatures?.map((value,index) => {
                            return (
                                <div key={`feauters-${index}`} className="feature-items">
                                    <h3>{value.title}</h3>
                                    {
                                        value.collestion?.map((value,index) => {
                                            return (
                                                <p key={`feature-data-${index}`}>{value.item}</p>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <div className={dropDown === 'dropDowncollection' ? 'active' : 'inactive'}>
                <div className="collection">
                    {
                        dropDowncollection.map((value,index) => {
                            return (
                                <div key={`collection-${index}`} className="collection-items">
                                    <img src={value.img} alt="" />
                                    <h3>{value.title}</h3>
                                    {
                                        value.collection?.map((value,index) => {
                                            return <p key={`collection-data-${index}`}>{value.item}</p>
                                        })
                                    }
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
            <div className={dropDown === 'dropDownwomen' ? 'active' : 'inactive'}>
                <div className="drop-down-women">
                    <div className="women-colection-con">
                        <div className="women-collection-items">
                            {
                                collectionWomen?.map((value,index) => {
                                    return (
                                        <div key={`women-${index}`} className="women-collection-details">
                                            <img src={value.img} alt="" />
                                            <div className="heading">{value.title}</div>
                                            <p><del>{value.totalPrice}</del><span>{value.currentPrice}</span></p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button>VIEW COLLECTION</button>
                    </div>
                    <div className="women-new-arrivals">
                        {
                            womenNewarrivals?.map((value,index) => {
                                return (
                                    <div key={`women-data-${index}`}>
                                        <img src={value.img} alt="" />
                                        <h3>{value.title}</h3>
                                        <p>{value.discription}</p>
                                        <button>SHOP IT NOW</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={dropDown === 'lookbook' ? 'active' : 'inactive'}>
                <div className="dropdown-lookbook">
                    {
                        lookBook.map((value)=>{
                            return(
                                 <div key={Math.random()}>{value.title}</div>
                                
                            )
                        })
                    }
                </div>
            </div>
            <div className={dropDown === 'pages' ? 'active' : 'inactive'}>
                <div className="dropdown-pages">
                    {
                        pages?.map((value)=>{
                            return(
                                <div key={Math.random()}>{value.title}</div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={dropDown === 'blog' ? 'active' : 'inactive'}>
                <div className="dropdown-blog">
                    {
                        blog?.map((value)=>{
                            return(
                                <div key={Math.random()}>{value.title}</div>
                            )
                        })
                    }
                </div>
            </div> 
        </div>
    )
}

export default Navdropdown;