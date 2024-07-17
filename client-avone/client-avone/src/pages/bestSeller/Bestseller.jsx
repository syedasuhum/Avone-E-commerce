import { useEffect, useState } from "react";

const Bestseller = () => {
    const [data, setData] = useState([])
    useEffect(() => {


        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/bestSeller');
                const json = await response.json();

                // Only put the results in state, ie, the actual users array
                setData(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData()

    }, [])

    return (
        <div className="best-seller">
            <div className="best-seller-title-1">ALL COLLECTIONS</div>
            <div className="best-seller-content-container">
                {
                    data.map((value,index)=>{
                        return(
                            <div key={`best_seller-${index}`} className="best-seller-item">
                                <img src={value.img} alt="" className="best-seller-imag"/>
                                <div className="best-seller-title-2">{value.title}</div>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    )
}
export default Bestseller;