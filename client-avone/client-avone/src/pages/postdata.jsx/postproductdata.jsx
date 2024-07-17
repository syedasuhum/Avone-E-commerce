import React from "react"
import axios from "axios";
const Postproductdata = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const img1=e.target.img1.value
        const img2=e.target.img2.value
        const totalPrice=e.target.totalPrice.value
        const currentPrice=e.target.currentPrice.value
        const title=e.target.title.value
        axios.post('http://localhost:8080',{
            img1,
            img2,
            totalPrice,
            currentPrice,
            title
        })
        .then((response)=>console.log(response))
        .catch((error)=>console.log(error))
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" id="img1" name="img1" placeholder="img1"/>
                <input type="text" id="img1" name="img2" placeholder="img2"/>
                <input type="number" id="totalPrice" name="totalPrice" placeholder="totalPrice"/>
                <input type="text" id="title" name="title" placeholder="title"/>
                <input type="number" id="currentPrice" name="currentPrice" placeholder="currentPrice"/>
                <input type="button" value="submit" />
            </form>
        </div>
    )
}

export default Postproductdata;