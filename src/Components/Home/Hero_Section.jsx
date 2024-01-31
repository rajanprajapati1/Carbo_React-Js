import React from 'react'

const Hero_Section = () => {
    return (
        <div className='Hero_Section'>
            <div className="hero_left">
                <div className="hero_Details">
                <div className="hero_heading">
                    <h1><span>We Always</span> <br />
                    <span>Ready</span> to Serve <br />
                    You <span>The Best</span></h1>
                </div>
                <div className="hero_para">
                    <p>Whether its a vacation gateway or just a day around town, go
                        to the Carbo services to find the right car for you-with
                       Car rentals powered by Carbo.
                    </p>
                </div>
                <button>Search Car Rental</button>
                </div>
            </div>
            <div className="hero_Right">
                <div className="images_hero">
                    <img src="../a.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero_Section
