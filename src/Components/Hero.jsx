import React from 'react'

const Hero = () => {
    return (
        <section className='Hero'>
            <div className="left">
            <span className='hero_text'>
                YOUR FEET DESERVE THE BEST
                </span>
                <p className='sub_hero_text'>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className='btn_sec'>
                    <button className="shopNow">Shop Now</button>
                    <button className="Category">Category</button>
                </div>
                <p className='avaliable_sec_text'>Also Available on</p>
                <div className="avaliable_sec">
                    <img src="/assets/amazon.png" alt="" />
                    <img src="/assets/flipkart.png" alt="" />
                </div>

            </div>
            <div className="right">
                <img src="/assets/shoe_image.png" alt="hero_pic" />
            </div>
        
        </section>
    )
}

export default Hero