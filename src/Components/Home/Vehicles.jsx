import React, { useState } from 'react'
import { rentalCarTypes } from '../../Data/Data'
import { Link } from 'react-router-dom';
const Vehicles = () => {
    const [Active, SetActive] = useState([]);
    const [Image, SetImages] = useState(rentalCarTypes);
    const HandleActive = (item) => {
        const updatedselected = Active.includes(item.id) ? Active.filter((selectedid) => selectedid !== item.id) : [...Active, item.id];
        SetActive(updatedselected);
        SetImages(updatedselected.length === 0 ? rentalCarTypes : rentalCarTypes.filter(car => updatedselected.includes(car.id)));
    }
    return (

        <div className='vehiclespage'>
            <hr />
            <div className="head">
                <h1><span>Our Vehicles</span> Ready   <br />
                    <span>Drive</span></h1>
                <p> We Provide our onomers with the most increditle dising emotions. That's why me
                    have only world class in our drive.</p>
            </div>
            <div className="filter_Section">
                <div className="filter_btn">
                    {rentalCarTypes.map((item) => {
                        return <button key={item.id} style={{ backgroundColor: Active.includes(item.id) ? 'black' : '#dbdbdb', color: Active.includes(item.id) ? 'white' : 'black' }} onClick={() => HandleActive(item)}>{item.name} Car</button>
                    })}
                </div>
                <div className="filter_cars">
                    {
                        Image.slice(0, 8).map((img) => {
                            return <> <Link to={'/Search/filter'}>
                                <div className="car_card" key={img.id}>
                                    <img src={img.image} alt="" />
                                </div>
                            </Link >
                            </>
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default Vehicles
