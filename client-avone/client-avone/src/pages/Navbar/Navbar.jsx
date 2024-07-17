import React, { useEffect, useState,useContext } from 'react';
import "../../assets/css/style.scss";
import { AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import Navdropdown from './navDropdown';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import ResponsiveDropdown from './responsiveDropdown';
import { CartContext } from '../PDP/CartContex';
import { WishlistContext } from '../Wishlist/WishlistContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { wishlistItems } = useContext(WishlistContext);
    const { cartItems } = useContext(CartContext);

    const goToCart = () => {
        navigate("/CartPage");
    };

    const goToWishlist = () => {
        navigate("/wishlist"); 
    };
    const [dropDownhome, setDropdownhome] = useState([])
    const [dropDownshop, setDropdownshop] = useState([])
    const [dropDownfeatures, setDropdownfeatures] = useState([])
    const [dropDowncollection, setDropdowncollection] = useState([])
    const [dropDownwomen, setDropdownwomen] = useState([])
    const [data, setData] = useState([])
    useEffect(() => {


        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/dropdown');
                const json = await response.json();

                // Only put the results in state, ie, the actual users array
                setData(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData()

    }, [data])


    useEffect(() => {
        const homeData = data.filter((value) => {
            return value.category === 'home'
        })
        setDropdownhome([...homeData])
        const shopData = data.filter((value) => {
            return value.category === 'shop'
        })
        setDropdownshop([...shopData])
        const featuresData = data.filter((value) => {
            return value.category === 'features'
        })
        setDropdownfeatures([...featuresData])


    }, [data])

    useEffect(() => {
        const womenData = data.filter((value) => {
            return value.category === 'women'
        })
        setDropdownwomen([...womenData])
        const collectionData = data.filter((value) => {
            return value.category === 'collection'
        })
        setDropdowncollection([...collectionData])
    }, [data])
    const lookBook = [
        {
            title: '2 Columns'
        },
        {
            title: '3 Columns'
        },
        {
            title: '4 Columns'
        },
        {
            title: '5 Columns + Fullwidth'
        },
        {
            title: 'Lookbook Shop'
        }
    ]
    const pages = [
        {
            title: 'About Us'
        },
        {
            title: 'Contact Us'
        },
        {
            title: 'FAQs'
        },
        {
            title: 'Landing Page '
        },
        {
            title: 'CMS'
        },
        {
            title: '404'
        },
        {
            title: 'Coming Soon'
        }
    ]
    const blog = [
        {
            title: 'Left Sidebar'
        },
        {
            title: 'Right Sidebar'
        },
        {
            title: 'Fullwidth'
        },
        {
            title: '2 Columns'
        },
        {
            title: '3 Columns'
        },
        {
            title: '4 Columns'
        },
        {
            title: 'Single Post'
        }
    ]

    const [show, setShow] = useState(false);
    const [dropDown, setDropdown] = useState()
    const [toggle, setToggle] = useState(false)
    // const [dropDownData, setDropdownData] = useState('')
    // const showDropdown = (e) => {
    //     setDropdown(e)
    //     setShow(true);
    // }
    const hideDropdown = e => {
        setShow(false);
    }

    const [resNav, setResnav] = useState(false)

    const handleNavbar = () => {
        setResnav(resNav ? false : true)
    }
    const handleRemove = () => {
        setResnav(false)
    }
    const handleToggle = () => {
        setToggle(toggle ? false : true)
    }
    const handleMousenter = (e) => {

        setDropdown(e)
        setShow(true);

    }

    return (
        <>

            <nav className="navbar">
                <div className='responsive-navbar'>
                    <div onClick={handleNavbar}>
                        <AiOutlineMenu />
                    </div>
                    <CiSearch />
                </div>

                <div className="navbar__logo"> <Link to="./">AVONE</Link></div>
                <div className="navbar__middle-text">
                    WELCOME TO OUR STORE! <strong>SIGNUP</strong>  NOW AND <strong>GET 30% OFF</strong>
                </div>
                <div className="navbar__icons">
                    <div className="navbar__icon-wrapper">
                    <AiOutlineSearch className="navbar__icon" />
                    </div>
                    <div className="navbar__icon-wrapper">
                    <Link to='/login'><AiOutlineUser className="navbar__icon" /></Link>
                    </div>
                    <div className="navbar__icon-wrapper" onClick={goToWishlist}>
                        <AiOutlineHeart className="navbar__icon" />
                        {wishlistItems.length > 0 && (
                            <span className="navbar__badge">{wishlistItems.length}</span>
                        )}
                    </div>
                    <div className="navbar__icon-wrapper" onClick={goToCart}>
                        <AiOutlineShoppingCart className="navbar__icon" />
                        {cartItems.length > 0 && (
                            <span className="navbar__badge">{cartItems.length}</span>
                        )}
                    </div>
                </div>
                {/* <div className="navbar__icons">
                    <AiOutlineSearch className="navbar__icon search-icon" />
                    <Link to='/login'><AiOutlineUser className="navbar__icon" /></Link>
                    <AiOutlineHeart className="navbar__icon heart-icon" />
                    <AiOutlineShoppingCart className="navbar__icon" onClick={goAddCart} />
                </div> */}
            </nav>
            <nav className="subnavbar" onMouseLeave={hideDropdown}>
                <ul className={resNav ? "subnavbar__menu " : "active-item subnavbar__menu"}>
                    <AiOutlineClose className='handle-close' onClick={handleRemove} />
                    <li className="subnavbar__item home-dropdown" onMouseEnter={() => handleMousenter("dropDownhome")} >
                        <div className='toggle-items'>
                            <span onClick={handleRemove}>HOME</span>
                            <span >  <i className={toggle ? "fa-solid fa-minus active-toggle-icon" : "fa-solid fa-plus active-toggle-icon"} onClick={handleToggle}></i></span>
                        </div>
                        <div className='responsive-drop-down-items'>
                            {
                                toggle &&
                                <ResponsiveDropdown dropDown={dropDownhome} />
                            }
                        </div>
                    </li>
                    <li className="subnavbar__item shop-dropdown" onMouseEnter={() => handleMousenter("dropDownshop")}>
                        <div className='toggle-items'>
                            <span onClick={handleRemove}>SHOP</span>
                            <span >  <i className={toggle ? "fa-solid fa-minus active-toggle-icon" : "fa-solid fa-plus active-toggle-icon"} onClick={handleToggle}></i></span>
                        </div>
                        <div className='responsive-drop-down-items'>
                            {
                                toggle &&
                                <ResponsiveDropdown dropDown={dropDownshop} />
                            }
                        </div>
                    </li>
                    <li className="subnavbar__item features-dropdown" onMouseEnter={() => handleMousenter("dropDownfeatures")} >
                        <div className='toggle-items'>
                            <span onClick={handleRemove}>FEATURES</span>
                            <span >  <i className={toggle ? "fa-solid fa-minus active-toggle-icon" : "fa-solid fa-plus active-toggle-icon"} onClick={handleToggle}></i></span>
                        </div>
                        <div className='responsive-drop-down-items'>
                            {
                                toggle &&
                                <ResponsiveDropdown dropDown={dropDownfeatures} />
                            }
                        </div>
                    </li>
                    <li className="subnavbar__item collections-dropdown" onMouseEnter={() => handleMousenter("dropDowncollection")} >
                        <div className='toggle-items'>
                            <span onClick={handleRemove}>COLLECTION</span>
                            <span >  <i className={toggle ? "fa-solid fa-minus active-toggle-icon" : "fa-solid fa-plus active-toggle-icon"} onClick={handleToggle}></i></span>
                        </div>
                        <div className='responsive-drop-down-items'>
                            {
                                toggle &&
                                <ResponsiveDropdown dropDown={dropDowncollection} />
                            }
                        </div>
                    </li>
                    <li className="subnavbar__item women-dropdown" onMouseEnter={() => handleMousenter("dropDownwomen")}>
                        <div className='toggle-items'>
                            <span onClick={handleRemove}>WOMEN</span>
                            <span >  <i className={toggle ? "fa-solid fa-minus active-toggle-icon" : "fa-solid fa-plus active-toggle-icon"} onClick={handleToggle}></i></span>
                        </div>
                        <div className='responsive-drop-down-items'>
                            {
                                toggle &&
                                <ResponsiveDropdown dropDown={dropDownwomen} />
                            }
                        </div>
                    </li>
                    <li className="subnavbar__item lookbook-dropdown" onMouseEnter={() => handleMousenter('lookbook')} >
                        <div className='toggle-items'>
                            <span onClick={handleRemove}>LOOKBOOK</span>
                            <span >  <i className={toggle ? "fa-solid fa-minus active-toggle-icon" : "fa-solid fa-plus active-toggle-icon"} onClick={handleToggle}></i></span>
                        </div>
                        <div className='responsive-drop-down-items'>
                            {
                                toggle &&
                                <ResponsiveDropdown dropDown={lookBook} />
                            }
                        </div>
                    </li>
                    <li className="subnavbar__item pages-dropdown" onMouseEnter={() => handleMousenter('pages')} >
                        <div className='toggle-items'>
                            <span onClick={handleRemove}>PAGES</span>
                            <span >  <i className={toggle ? "fa-solid fa-minus active-toggle-icon" : "fa-solid fa-plus active-toggle-icon"} onClick={handleToggle}></i></span>
                        </div>
                        <div className='responsive-drop-down-items'>
                            {
                                toggle &&
                                <ResponsiveDropdown dropDown={pages} />
                            }
                        </div>
                    </li>
                    <li className="subnavbar__item blog-dropdown" onMouseEnter={() => handleMousenter('blog')} >
                        <div className='toggle-items'>
                            <span onClick={handleRemove}>BLOG</span>
                            <span >  <i className={toggle ? "fa-solid fa-minus active-toggle-icon" : "fa-solid fa-plus active-toggle-icon"} onClick={handleToggle}></i></span>
                        </div>
                        <div className='responsive-drop-down-items'>
                            {
                                toggle &&
                                <ResponsiveDropdown dropDown={blog} />
                            }
                        </div>
                    </li>
                    <li className="subnavbar__item buynow-dropdown" onClick={handleRemove}>BUY NOW</li>
                    <li className="subnavbar__item responsive-content" onClick={handleRemove}>LOGIN</li>
                    <li className="subnavbar__item responsive-content" onClick={handleRemove}>RIGISTER NOW</li>
                    <li className="subnavbar__item responsive-content" onClick={handleRemove}>WISHLIST</li>



                </ul>
                {show &&
                    <Navdropdown dropDownhome={dropDownhome} dropDownshop={dropDownshop} dropDownfeatures={dropDownfeatures} dropDowncollection={dropDowncollection} dropDownwomen={dropDownwomen} lookBook={lookBook} pages={pages} blog={blog} dropDown={dropDown} />
                }


            </nav>
        </>
    );
};

export default Navbar;
