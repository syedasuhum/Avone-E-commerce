import React from 'react'
import "../../assets/css/style.scss";

const About = () => {
  return (
     <>
       <div className='about-content'>
          <div className='about-Heading'>
             <h1>About Us</h1>
             <p className='about-para'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis <br />aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit <br />anim id est laborum.</p>
          </div>

          <div className='about-img'>
            <img src='https://avon-demo.myshopify.com/cdn/shop/files/fashion_787be7e7-7c09-4366-b4a8-226812bed4ea.jpg?v=1614330596'  alt=''/>
          </div>

          <div className='about-description'>
                <div className='about-rc'>
                    <h3>WHY WE</h3>
                    <p>Avon comes with easy-to-use interface and outstanding support. You can implement your own design. You <br />can easily change the store's appearance as per your requirements using our ready sections and options <br />available.</p>
                </div>
                <div className='about-rc'>
                    <h3>OUR VISION</h3>
                    <p>Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec venenatis id, pretium sit amet purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>
                <div className='about-rc'>
                    <h3>CONTACT US</h3>
                    <p>
                        <strong>55 Gallaxy Enque,</strong>
                                    <br />
                                2568 steet, 23568 NY
                                <br />
                                <br />
                                <strong>Phone : </strong>(440) 000 000 0000
                                <br />
                                <strong>Email:</strong> sales@yousite.com
                    </p>
                </div>
                <div className='about-rc'>
                    <h3>OUR TEAM</h3>
                    <div className='image-rc'>
                        <div className='about-image_main'>
                            <img src='https://avon-demo.myshopify.com/cdn/shop/files/demo2-about-3_400x.jpg?v=1614330612' alt='' />
                            <h4>ANGELA ROBOT</h4>
                            <p>FOUNDER & CEO</p>
                        </div>
                        <div className='about-image_main'>
                            <img src='https://avon-demo.myshopify.com/cdn/shop/files/demo2-about-2_400x.jpg?v=1614330612'  alt=''/>
                            <h4>JULIA WILLE</h4>
                            <p>Co. FOUNDER</p>
                        </div>
                        <div className='about-image_main'>
                            <img src='https://avon-demo.myshopify.com/cdn/shop/files/demo2-about-1_400x.jpg?v=1614330612' alt=''/>
                            <h4>STEVE SMITH</h4>
                            <p>Fashion Designer</p>
                        </div>
                    </div>
                </div>
          </div>
      </div>
     </>
  )
}

export default About;