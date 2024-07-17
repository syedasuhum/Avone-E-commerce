import React, { useState } from 'react';
import "../../assets/css/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProductDetails = () => {
  const [key, setKey] = useState({"PD":true, "R":false, "SF":false, "SR":false});

  const caroselImages = [
    {
        img: 'https://avon-demo.myshopify.com/cdn/shop/files/collection-list-1-demo4_300x.jpg?v=1614330616',
        discription: 'MINI DRESS',
        price: "$300.00",
    },
    {
        img: 'https://avon-demo.myshopify.com/cdn/shop/products/1_45ec2bbf-94ac-4118-b67e-ee0c4ba50515_150x.jpg?v=1560851836%20150w%20192h',
        discription: 'SHOES',
        price: "$280.00",
    },
    {
        img: '//avon-demo.myshopify.com/cdn/shop/products/4_3c8c92dd-c1e8-4e22-ba45-7f65019f0d97_150x.jpg?v=1559910766 150w 192h',
        discription: 'MINI SKIRTS',
        price: "$290.00",
    },
    {
        img: '//avon-demo.myshopify.com/cdn/shop/products/7_11472ff1-b0f3-4715-8b2b-cecd94e5f68d_150x.jpg?v=1649332638 150w 192h',
        discription: 'Top',
        price: "$170.00",
    },
    {
        img: '//avon-demo.myshopify.com/cdn/shop/products/1_58cf8456-b367-444a-881b-67ccb90ae4fe_150x.jpg?v=1559905397 150w 192h',
        discription: 'T-Shirt',
        price: "$320.00",
    },
    {
        img: '//avon-demo.myshopify.com/cdn/shop/products/3_12113919-0f0f-4b93-ad4f-a4b2449f19b5_150x.jpg?v=1559907582 150w 192h',
        discription: 'T-Shirt',
        price: "$100.00",
    },
    {
      img: 'https://avon-demo.myshopify.com/cdn/shop/products/565_150x.jpg?v=1559887124%20150w%20192h',
      discription: 'Stylish top',
      price: "$340.00",
    },
    {
      img: '//avon-demo.myshopify.com/cdn/shop/products/1_92ae5e99-b7ea-4b76-a498-ada80e9fc25a_150x.jpg?v=1560851739 150w 192h',
      discription: 'cargo Pant',
      price: "$250.00",
  }
]
const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
};

  return (
    <>
      <div className='menu'>
        <div className='container'>
          <button className="btn" onClick={()=>{setKey({"PD":true, "R":false, "SF":false, "SR":false})}}>PRODUCTS DETAILS</button>
          <button className="btn" onClick={()=>{setKey({"PD":false, "R":true, "SF":false, "SR":false})}}>REVIEWS</button>
          <button className="btn" onClick={()=>{setKey({"PD":false, "R":false, "SF":true, "SR":false})}}>SIZE & FIT</button>
          <button className="btn" onClick={()=>{setKey({"PD":false, "R":false, "SF":false, "SR":true})}}>SHIPPING & RETURNS</button>
        </div>
      </div>


      {key.PD?(
        /* ------------PRODUCTS DETAILS------------- */
        <div className='content'>
          <div>
            <p>A little crisp, a little sunny, warm enough to skip a coat, just cool enough to wrap great cashmere around is this asymmetrical jumper. With a chic hue, this one makes for a perfect pick this fall. So
                <br /> get your basics right and you are good to go.
            </p>

            <ul>
              <li>High-neck style</li>
              <li>Drop shoulders</li>
              <li>Flared cuffs</li>
              <li>Asymmetrical hem</li>
            </ul>
          </div>

          <div >
            <h3>MODEL MEASUREMENTS</h3>
            <p>Bust: 33"</p>
            <p>Waist: 24"</p>
            <p>Hip: 34"</p>
            <p>Wearing Size: 24</p>
          </div>

          <div>
            <h3> FABRIC COMPOSITION</h3>
            <p>This Cute Tank Tops is Lightweight, Relaxed and Comfortable to Wear. Pair it with variety of jeans, skirts, and jeggings for a look that's easy to love all season long.</p>
          </div>

          <div>
          <h3>Wash Care</h3>
          <p>Machine Wash</p>
          </div>

          <div>
            <h3>NOTE</h3>
            <p>It's a loose fit blouse. You could choose a size down it you prefer to get a more fitness blouse. Please take our customers reviews as reference to help you make an informed purchase decision.</p>
          </div>
        </div>
      ):(key.R?(
        <div></div>
      ):(key.SF?(
        /* ----------SIZE & FIT----------- */
        <div className='size'>
          <div className='size_div'>
            <h3>Women's Size Guide</h3>
            <p>This is a standardised guide to give you an idea of what size you will need, however some brands may vary from these conversions.</p>
          </div>

          <div className='chart'>
            <h3>Ready to Wear Clothing</h3> 
          </div>

          <div>
            <table>
                <tr>
                  <th>Size</th>
                  <th>XXS-XS</th>
                  <th>XS-S</th>
                  <th>S-M</th>
                  <th>M-L</th>
                  <th>L-XL</th>
                  <th>XL-XXL</th>
                </tr>

                <tr>
                  <td>UK</td>
                  <td>6</td>
                  <td>8</td>
                  <td>10</td>
                  <td>12</td>
                  <td>14</td>
                  <td>16</td>
                </tr>

                <tr>
                  <td>US</td>
                  <td>2</td>
                  <td>4</td>
                  <td>6</td>
                  <td>8</td>
                  <td>10</td>
                  <td>12</td>
                </tr>

                <tr>
                  <td>Italy(IT)</td>
                  <td>38</td>
                  <td>40</td>
                  <td>42</td>
                  <td>44</td>
                  <td>46</td>
                  <td>48</td>
                </tr>

                <tr>
                  <td>France(FR/EU)</td>
                  <td>34</td>
                  <td>36</td>
                  <td>38</td>
                  <td>40</td>
                  <td>42</td>
                  <td>44</td>
                </tr>

                <tr>
                  <td>Denmark</td>
                  <td>32</td>
                  <td>34</td>
                  <td>36</td>
                  <td>38</td>
                  <td>40</td>
                  <td>42</td>
                </tr>

                <tr>
                  <td>Russia</td>
                  <td>40</td>
                  <td>42</td>
                  <td>44</td>
                  <td>46</td>
                  <td>48</td>
                  <td>50</td>
                </tr>

                <tr>
                  <td>Germany</td>
                  <td>32</td>
                  <td>34</td>
                  <td>36</td>
                  <td>38</td>
                  <td>40</td>
                  <td>42</td>
                </tr>

                <tr>
                  <td>Japan</td>
                  <td>2</td>
                  <td>4</td>
                  <td>6</td>
                  <td>8</td>
                  <td>10</td>
                  <td>12</td>
                </tr>

                <tr>
                  <td>Australia</td>
                  <td>6</td>
                  <td>8</td>
                  <td>10</td>
                  <td>12</td>
                  <td>14</td>
                  <td>16</td>
                </tr>

                <tr>
                  <td>Korea</td>
                  <td>33</td>
                  <td>35</td>
                  <td>37</td>
                  <td>38</td>
                  <td>40</td>
                  <td>42</td>
                </tr>

                <tr>
                  <td>China</td>
                  <td>52</td>
                  <td>54</td>
                  <td>56</td>
                  <td>58</td>
                  <td>60</td>
                  <td>62</td>
                </tr>

                <tr>
                  <td>Jeans</td>
                  <td>24-25</td>
                  <td>26-27</td>
                  <td>28-29</td>
                  <td>30-31</td>
                  <td>32-33</td>
                  <td>34-35</td>
                </tr>
            </table>
          </div>

        </div>
      ):(key.SR?(
        /* --------SHIPPING & RETURNS-------- */
        <div className='return'>
        <div>
          <h3>Returns Policy</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eros justo, accumsan non dui sit amet. Phasellus semper volutpat mi sed imperdiet. Ut odio lectus, vulputate non ex non, mattis <br /> sollicitudin purus. Mauris consequat justo a enim interdum, in consequat dolor accumsan. Nulla iaculis diam purus, ut vehicula leo efficitur at.</p>
        </div>
        <div className='shipping_para'>
          <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. In blandit nunc enim, sit amet pharetra erat aliquet ac.</p>
        </div>

        <div>
          <h3>Shipping</h3>
          <p>Pellentesque ultrices ut sem sit amet lacinia. Sed nisi dui, ultrices ut turpis pulvinar. Sed fringilla ex eget lorem consectetur, consectetur blandit lacus varius. Duis vel scelerisque elit, et vestibulum <br/> metus. Integer sit amet tincidunt tortor. Ut lacinia ullamcorper massa, a fermentum arcu vehicula ut. Ut efficitur faucibus dui Nullam tristique dolor eget turpis consequat varius. Quisque a  <br />  interdum augue. Nam ut nibh mauris.</p>
        </div>
        </div>
      ):(
        <div></div>
      ))))}
      


      

         
     
        {/* ----------Customers Also Viewed--------- */}
        <div className="hot-sale-carosel">
            <div className="hot-sale-carosel-title">
                <div className="hot-sale-title" style={{fontSize:"1.5em"}} >Customers Also Viewed</div>
            </div>
            <div>
                <Slider {...settings}>
                    {caroselImages.map((d) => (
                        <div key={Math.random()} className="hot-sale-carosel-items">
                            <img src={d.img} alt="" />
                            <div className="carosel-discription">{d.discription}</div>
                            <div className="carosel-discription">{d.price}</div>
                            <button type="button" className=" slick-prev"></button>
                            <button type="button" className=" slick-next "></button>
                        </div>
                    ))}

                </Slider>
            </div>
        </div>


        {/* ---------------RECOMMENDED PRODUCTS---------------- */}
        {/* <div className="hot-sale-carosel">
            <div className="hot-sale-carosel-title">
                <div className="hot-sale-title" style={{fontSize:"1.5em"}} >Recommended Products</div>
            </div>
            <div>
                <Slider {...settings}>
                    {caroselImages.map((d) => (
                        <div key={Math.random()} className="hot-sale-carosel-items">
                            <img src={d.img} alt="" />
                            <div className="carosel-discription">{d.discription}</div>
                            <div className="carosel-discription">{d.price}</div>
                            <button type="button" className=" slick-prev"></button>
                            <button type="button" className=" slick-next "></button>
                        </div>
                    ))}

                </Slider>
            </div>
        </div> */}

           

    </>
  );
};
export default ProductDetails;

