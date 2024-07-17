import React, { useEffect, useState } from "react";
import Plpleft from "./plpLeft";
import Plpright from "./plpRight";
import { useParams } from "react-router-dom";

const Productlistingpage = () => {
    const { id } = useParams();
    const userData = { id }


    const [data, setData] = useState([])

   
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/pdp');
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData()
    }, [])
    const [categoryItem, setCategory] = useState('Featured');
    const [productImagemain, setProductimageMain] = useState([])
    const [Featured, setFeatured] = useState([])
    const [Best_Selling, setBest_Selling] = useState([])
    const [A_Z, setA_Z] = useState([])
    const [Z_A, setZ_A] = useState([])
    const [Lowest_price, setLowest_Price] = useState([])
    const [Highest_Price, setHighest_Price] = useState([])
    const [New_To_Old, setNew_to_Old] = useState([])
    const [Old_To_New, setOld_to_New] = useState([])
    const [productContent, setProductcontent] = useState([])
    useEffect(() => {
        const productData = data.filter((value) => value.id === userData.id)
        setProductimageMain(productData[0]?.imag)
        setProductcontent(productData[0]?.images)
        const featuredata = productData[0]?.images.filter((value) => value.Featured === 'Featured')
        setFeatured(featuredata)
        const Best_Selling_data = productData[0]?.images.filter((value) => value.Best_Selling === 'Best Selling')
        setBest_Selling(Best_Selling_data)
        const atozdata = productData[0]?.images.filter((value) => value.A_Z === 'A-Z')
        setA_Z(atozdata)
        const ztoaData = productData[0]?.images.filter((value) => value.Z_A === 'Z-A')
        setZ_A(ztoaData)
        const Lowest_Price_data = productData[0]?.images.filter((value) => value.Lowest_Price === 'Lowest Price')
        setLowest_Price(Lowest_Price_data)
        const Highest_Price_data = productData[0]?.images.filter((value) => value.Highest_Price === 'Highest Price')
        setHighest_Price(Highest_Price_data)
        const New_to_Old_data = productData[0]?.images.filter((value) => value.New_to_Old === 'New to Old')
        setNew_to_Old(New_to_Old_data)
        const Old_to_New_data = productData[0]?.images.filter((value) => value.Old_to_New === 'Old to New')
        setOld_to_New(Old_to_New_data)

    }, [data,userData.id])
    const [product, setProduct] = useState(Featured)
    const [students, setStudents] = useState([]);
    const [Item, setItems] = useState([])
    const [filterBrand, setFilterbrand] = useState([])
    const [brandItems, setBranditems] = useState([])
    useEffect(() => {
        if (students.length > 0) {
            const filter = students.map((val) => productContent.filter((item) => item.Product_Type === val))
            setItems(filter[0])
        }
        if (filterBrand.length > 0) {
            const brandfilter = filterBrand.map((val) => productContent.filter((item) => item.Brand === val))
            setBranditems([...brandfilter[0]])

        }
    }, [students, productContent, filterBrand])

    useEffect(() => {
        if (categoryItem === "Featured") {
            setProduct(Featured)
        }
        if (categoryItem === "Best Selling") {
            setProduct(Best_Selling)

        }
        if (categoryItem === "A-Z") {
            setProduct(A_Z)
        }
        if (categoryItem === "Z-A") {
            setProduct(Z_A)
        }
        if (categoryItem === "Lowest Price") {
            setProduct(Lowest_price)
        }
        if (categoryItem === "New to Old") {
            setProduct(New_To_Old)
        }
        if (categoryItem === "Old to New") {
            setProduct(Old_To_New)
        }
        if (categoryItem === "Highest Price") {
            setProduct(Highest_Price)
        }
        if (students.length > 0) {
            setProduct(Item)
        }
        if (filterBrand.length > 0) {
            setProduct(brandItems)
        }

    }, [categoryItem, students.length, Featured, Best_Selling, A_Z, Z_A, Lowest_price, New_To_Old, Old_To_New, Highest_Price, Item, filterBrand.length, brandItems])

    const handleBrand = (e) => {
        const { value, checked } = e.target;
        const newBrand = [...filterBrand];
        const index = newBrand.indexOf(value);

        // Case 1 : The user checks the box
        if (checked) {
            newBrand.push(value);
        }

        // Case 2  : The user unchecks the box
        else {
            newBrand.splice(index, 1);
        }
        setFilterbrand(newBrand);
    }

    const handleChange = (e) => {

        const { value, checked } = e.target;
        const newtype = [...students];
        const index = newtype.indexOf(value);

        // Case 1 : The user checks the box
        if (checked) {
            newtype.push(value);
        }

        // Case 2  : The user unchecks the box
        else {
            newtype.splice(index, 1);
        }
        setStudents(newtype);
    };
    const [activePLP, setActivePLP] = useState(false)
    const handleResponsivePLPfilter = () => {
        setActivePLP(activePLP ? false : true)
    }
    return (
        <div className="plp">
            <div className={activePLP ? "plp-right " : "activePLP plp-right"}>
                <Plpright productContent={productContent} handleChange={handleChange} userData={userData} handleBrand={handleBrand} setActivePLP={setActivePLP} />
            </div>
            <div className="plp-left">
                <Plpleft categoryItem={categoryItem} product={product} productImagemain={productImagemain} setCategory={setCategory} handleResponsivePLPfilter={handleResponsivePLPfilter}  />
            </div>
        </div>
    )
}

export default Productlistingpage;