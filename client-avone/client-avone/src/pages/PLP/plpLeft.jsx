import React, {  useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsZoomIn } from "react-icons/bs";

const Plpleft = ({ categoryItem, product, productImagemain, setCategory,handleResponsivePLPfilter }) => {


    const options = [
        "Featured",
        "Best Selling",
        "A-Z",
        "Z-A",
        "Lowest Price",
        "New to Old",
        "Old to New",
        "Highest Price"
    ];
    const onOptionChangeHandler = (event) => {
        setCategory(event.target.value)
    }


    const [switchData, setSwitchdata] = useState('switch-row')
    return (
        <div>
            <div className="main-product-imag">
                <img src={productImagemain} alt="" />
            </div>
            <div>
                <button className="filter_button_responsive" onClick={handleResponsivePLPfilter}>FILTER</button>
            </div>
            <div className="sorting-details">
                <div className="switch-data"><BsFillGrid3X3GapFill onClick={() => setSwitchdata('switch-row')} className={switchData === 'switch-coloum' ? 'Switch_change_color ' : ''} /><FaList onClick={() => setSwitchdata('switch-coloum')} className={switchData === 'switch-row' ? 'Switch_change_color ' : ''} /></div>
                <div className="plp-product-result">Showing: {product?.length} Results</div>
                <div>
                    <select onChange={onOptionChangeHandler}>
                        <option>{categoryItem}</option>
                        {options.map((option, index) => {
                            return (
                                <option key={index}>
                                    {option}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
           
            <div className={switchData === 'switch-row' ? 'Switch_active product-listing-images' : 'Switch_deactive'}>
                {
                    product?.map((val, index) => {
                        return (
                            <div key={`product-imag-${index}`} className="plp-image-items">
                                <div className="product-main-image">
                                    <img src={val.img1} alt="" className="plp-image-1" />
                                    <div className="hover-content">
                                        <img src={val.img2} alt="" />
                                        <div className="plp-add-to-cart">
                                            <BsCart3 className="plp-icons" />
                                            <BsHeart className="plp-icons" />
                                            <BsZoomIn className="plp-icons" />
                                        </div>
                                    </div>
                                </div>
                                <div className="plp-pricing">
                                    <div className="plp-image-title ">{val.title}</div>
                                    <div className="plp-price">{val.price}</div>
                                </div>

 
                            </div>
                        )
                    })
                }
            </div>
            <div className={switchData === 'switch-coloum' ? 'Switch_active product-listing-colom-images' : 'Switch_deactive'}>
                {
                    product?.map((value, index) => {
                        return (
                            <div className="product-listing-colom-item" key={`switch_colum_${index}`}>
                                <img src={value.img1} alt="" className="colom_image" />
                                <div className="colom_details">
                                    <div className="colom_details_title">{value.title}</div>
                                    <div className="colom_details_description">{value.discription}</div>
                                    <div className="colom_details_price">{value.price}</div>
                                    <div className="colom_details_buttons">
                                        <div>
                                            <button>Select Options</button>
                                        </div>
                                        <div>
                                            <BsHeart className="colom_icon" />
                                        </div>
                                        <div>
                                            <BsZoomIn className="colom_icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Plpleft;