import React, { useState } from 'react';
import { rentalCarTypes } from '../Data/Data';
import Main from '../Components/Search/Main';
import PickUp from '../Components/Search/PickUP';

const SearchPage = () => {
    const [Search, SetSearch] = useState(false);
    const [StateBased,SetStateBased] =useState([]);
    const [Pricing, SetPricing] = useState({ min: 100, max: 9999 });
    const FilterstatewieseCar = rentalCarTypes.filter((item)=>item.location.includes(StateBased?.pickupLocation));
    const [filterData,SetfilterData] =useState(FilterstatewieseCar);
console.log(FilterstatewieseCar)
    const [selectedFilters, setSelectedFilters] = useState({
        'Prices': Pricing,
        'Fuel Type': [],
        'Seating Capacity': [],
        'Car Types': [],
    });

    const filterCategories = [
        { title: 'Prices', type: 'range', min: 100, max: 9999 },
        { title: 'Fuel Type', options: ['Diesel', 'Petrol'] },
        { title: 'Seating Capacity', options: ['5 Seats', '7 Seats'] },
    ];

    const combinedData = [
        ...filterCategories,
        { title: 'Car Types', options: FilterstatewieseCar.map(carType => carType.name)},
    ];
    const applyFilters = () => {
        const filteredCarTypes = FilterstatewieseCar.filter(carType => {
            return combinedData.every(category => {
                if (category.type === 'range') {
                    return (
                        carType.prices &&
                        carType.prices.Morning &&
                        carType.prices.Morning.min >= selectedFilters[category.title].min &&
                        carType.prices.Morning.max <= selectedFilters[category.title].max
                    );
                } else {
                    return (
                        selectedFilters[category.title].length === 0 ||
                        category.options.some(option => selectedFilters[category.title].includes(option))
                    );
                }
            });
        });
        SetfilterData(filteredCarTypes);
    };


    return (
        <>
            <PickUp SetSearch={SetSearch} SetStateBased={SetStateBased}/>
            {Search && (
                <div className='SearchPage'>
                    <div style={{ flex: '0 0 25%', padding: '20px', borderRight: '1px solid #ccc' }} className='filter_box'>
                        {combinedData.map((category, index) => (
                            <div key={index}>
                                <h2>{category.title}</h2>
                                <div className='fbox'>
                                    {category.type === 'range' ? (
                                        <div className="fisrt">
                                            <strong>₹ {Pricing.min}</strong>
                                            <input
                                                type="range"
                                                min={category.min}
                                                max={category.max}
                                                onChange={(e) => SetPricing({ ...Pricing, min: e.target.value })}
                                            />
                                            <strong>₹ {Pricing.max}</strong>
                                        </div>
                                    ) : (
                                        category.options.map((option, subIndex) => (
                                            <div key={subIndex}>
                                                <input
                                                    type="checkbox"
                                                    id={option}
                                                    name={option}
                                                    checked={selectedFilters[category.title].includes(option)}
                                                    onChange={() => {
                                                        setSelectedFilters((prevFilters) => ({
                                                            ...prevFilters,
                                                            [category.title]: prevFilters[category.title].includes(option)
                                                                ? prevFilters[category.title].filter((filter) => filter !== option)
                                                                : [...prevFilters[category.title], option],
                                                        }));
                                                    }}
                                                />
                                                <label htmlFor={option}>{option}</label>
                                            </div>
                                        ))
                                    )}
                                </div>
                                <br />
                            </div>
                        ))}
                        <button
                            onClick={applyFilters
                            }
                        >
                            Apply Filters
                        </button>
                    </div>
                    <div style={{ flex: '0 0 75%', padding: '10px', height: 'auto', overflowY: 'scroll' }}>
                        <Main  filterData ={FilterstatewieseCar}/>
                    </div>
                </div>
            )}
        </>
    );
};

export default SearchPage;
