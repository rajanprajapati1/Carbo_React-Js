import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import { MdWatchLater } from 'react-icons/md';
import { States } from '../../Data/Data';

const PickUP = ({ SetSearch ,SetStateBased}) => {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    pickupDate: '',
    pickupTime: 'Morning',
    dropoffDate: '',
    dropoffTime: 'Morning',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    console.log('Search:', formData);
    // setFormData({
    //   pickupLocation: '',
    //   pickupDate: '',
    //   pickupTime: 'Morning',
    //   dropoffDate: '',
    //   dropoffTime: 'Morning',
    // });
    SetStateBased(formData)
  SetSearch(true);
  };
  const isFutureDate = (selectedDate, referenceDate) => {
    const reference = referenceDate ? new Date(referenceDate) : new Date();
    const selected = new Date(selectedDate);
    return selected >= reference;
  };

  return (
    <div className="select_date">
      <div className="box">
        <div className="box_images">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/select-travel-location-8324769-6631873.png?f=webp" alt="" />
        </div>
        <div className="box_details">
          <h2>Find the Perfect Car for Rent</h2>
          <div className="pick_loaction">
            <FaLocationCrosshairs />
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              placeholder="Pick Location"
              list="pickupLocations"
            />
             <datalist id="pickupLocations">
        {States.map((location, index) => (
          <option key={index} value={location} />
        ))}
      </datalist>
          </div>
          <section>
            <div className="pick_up">
              <MdWatchLater />
              <input
              id="date"
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]} 
              />
              <div className="select">
                <select
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleChange}
                >
                  <option value="Morning">Morn</option>
                  <option value="Noon">Noon</option>
                  <option value="Evening">Even</option>
                  <option value="Night">Night</option>
                </select>
              </div>
            </div>
            <div className="pick_up">
              <MdWatchLater />
              <input
                type="date"
            id="date2"
                name="dropoffDate"
                value={formData.dropoffDate}
                onChange={handleChange}
                min={formData.pickupDate} 
              />
              <div className="select">
                <select
                  name="dropoffTime"
                  value={formData.dropoffTime}
                  onChange={handleChange}
                  disabled={!isFutureDate(formData.pickupDate)}
                >
                  <option value="Morning">Morn</option>
                  <option value="Noon">Noon</option>
                  <option value="Evening">Even</option>
                  <option value="Night">Night</option>
                </select>
              </div>
            </div>
          </section>
          <button onClick={handleSearch}>
            <FaSearch /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default PickUP;
