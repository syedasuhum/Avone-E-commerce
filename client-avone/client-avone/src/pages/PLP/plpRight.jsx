import React from "react"
import Carosel from "./Carosel";
import { Link } from "react-router-dom";


const Plpright = ({ productContent, handleChange, userData,handleBrand,setActivePLP }) => {
    const categories = [
        {
            item: 'Women',
            link: '/plp/product-1',
            class: 'product-1'
        },
        {
            item: 'Men',
            link: '/plp/product-5',
            class: 'product-5'
        },
        {
            item: 'Shoes',
            link: '/plp/product-2',
            class: 'product-2'
        },
        {
            item: 'Popular',
            link: '/plp/product-8',
            class: 'product-8'
        },
        {
            item: 'Best Seller',
            link: '/bestseller',
            class:'bestseller'
        },
        {
            item: 'Accesories',
            link: '/plp/product-4',
            class: 'product-4'
        }
    ]
    

    const handleclick = () => {
        window.location.reload()
    }

    const typeIetems = productContent?.map(x => x.Product_Type);
    const uniqueType = [...new Set(typeIetems)];
    const brandItems = productContent?.map(x => x.Brand);
    const uniqueBrand = [...new Set(brandItems)];

    return (
        <>
        <i className="fa-solid fa-xmark xmark-plp" onClick={()=>setActivePLP(false)}></i>
            <div className="categories-con">
                <h3>Categories</h3>
                {
                    categories.map((value, index) => {
                        return (
                             <div key={`categories-${index}`} className="categories-item-con" onClick={handleclick}> <Link to={value.link} className={userData.id === value.class ? 'change_category_color' : ''}>{value.item}</Link></div>
                        )
                    })
                }
            </div>

            <div className='product-type'>
                <h3>Product Type</h3>

                {
                    uniqueType?.map((val, index) => {
                        return (
                            <div key={`product-type-${index}`}>
                                <input type="checkbox" id={val} value={val} onChange={handleChange} />  <label htmlFor={val}>{val}</label>
                            </div>
                        )
                    })
                }

            </div>
            <div className='brand'>
                <h3>Brand</h3>
                <div className='brand-content'>
                    {
                        uniqueBrand.map((value, index) => {
                            return (
                                <div key={`brands-${index}`} className='brand-items'>
                                    <input type="checkbox" id={value} value={value} onChange={handleBrand}/>
                                    <label htmlFor={value}> {value}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='availability'>
                <h3>Availability</h3>
                <div>
                    <div>
                        <input type="checkbox" id='In stock' />
                        <label htmlFor="In stock"> In stock</label>
                    </div>
                    <div>
                        <input type="checkbox" id='Out of stock' />
                        <label htmlFor="Out of stock"> Out of stock</label>
                    </div>
                </div>
            </div>
            <div>
                <Carosel />
            </div>
        </>
    )
}
export default Plpright;