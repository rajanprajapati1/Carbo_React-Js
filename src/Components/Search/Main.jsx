import React from 'react'
import CarsCard from './CarsCard';
// In Main component

const Main = ({ filterData }) => {
    if (!filterData) {
        // Handle the case where filterData is undefined
        return null;
    }

    return (
        <div className='main_Serach'>
            <h2>{filterData.length} Cars Available</h2>
            <br />
            <div className="cars_list">
                {filterData.map((item) => (
                    <CarsCard data={item} key={item.id} /> 
                                    ))}
            </div>
        </div>
    );
};


export default Main
