import React from 'react'
import { rentalCarTypes } from '../../Data/Data';
import { LuFuel } from "react-icons/lu";
import { TbAutomaticGearbox } from "react-icons/tb";
import { MdAirlineSeatReclineExtra } from "react-icons/md";


const CarsCard = ({ data }) => {
    return (
        <div className='Cars_card'>
            <div className="first">
                <img src={data.image} alt="" />
                <button>Book Now</button>
            </div>
            <div className="second">
                <div className="first_row">
                    <span>{data.name}</span>
                    <h3>{data.model || data.name}</h3>
                </div>
                <div className="first_row icons">
                    <span><LuFuel color='brown' /> Petrol   </span>
                    <span><TbAutomaticGearbox color='blue'/> Automatic</span>
                    <span><MdAirlineSeatReclineExtra color='orangered'/> 5 Seater</span>
                </div>
                <div className="first_row">
                 <h2>₹ 5125 </h2>
                </div>
                <div className="first_row">
                    <strong>Prices exclude fuel Cost</strong>
                </div>
            </div>
        </div>
    )
}

export default CarsCard
