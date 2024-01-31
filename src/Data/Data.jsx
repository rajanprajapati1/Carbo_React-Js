
const statesArray1 = [
  'Maharashtra',
  'Delhi',
  'Tamil Nadu',
  'Karnataka',
  'Uttar Pradesh',
  'Gujarat',
  'West Bengal',
  'Rajasthan',
  'Kerala',
  'Bihar',
  // Add more states as needed
];
const statesArray2 = [
  'Maharashtra',
  'Delhi',
  'Tamil Nadu',
  'Karnataka',
  'Uttar Pradesh',
  'Gujarat',
  'West Bengal',
  'Rajasthan',
  'Kerala',
  'Bihar',
  'Maharashtra', // Same state as in the first array
  'Haryana',
  'Punjab',
  // Add more states as needed
];
const statesArray3 = [
  'Andhra Pradesh',
  'Telangana',
  'Odisha',
  'Assam',
  'Jharkhand',
  'Chhattisgarh',
  'Himachal Pradesh',
  'Madhya Pradesh',
  'Uttarakhand',
  'Goa',
  // Add more states as needed
];
export const States = [...statesArray1 ,...statesArray2 ,...statesArray3];

export const rentalCarTypes = [
  {
    id: 1,
    name: 'Casual',
    image: '/cars/causal.webp',
    type: 'Casual',
    fuelType: 'Petrol',
    seatingCapacity: '5 Seats',
    location : statesArray1,
    prices: {
      Morning: {
        min: 50,
        max: 100,
      },
      Noon: {
        min: 70,
        max: 120,
      },
      Evening: {
        min: 90,
        max: 150,
      },
      Night: {
        min: 80,
        max: 130,
      },
    },
  },
  {
    id: 2,
    name: 'Compact',
    image: '/cars/compact.jpg',
    type: 'Compact',
    fuelType: 'Diesel',
    seatingCapacity: '5 Seats',
    location : statesArray3,
    prices: {
      Morning: {
        min: 60,
        max: 110,
      },
      Noon: {
        min: 80,
        max: 130,
      },
      Evening: {
        min: 100,
        max: 160,
      },
      Night: {
        min: 90,
        max: 140,
      },
    },
  },
  {
    id: 3,
    name: 'Convertible',
    image: '/cars/Convertible.webp',
    type: 'Convertible',
    fuelType: 'Petrol',
    seatingCapacity: '4 Seats',
    location : statesArray1,
    prices: {
      Morning: {
        min: 80,
        max: 150,
      },
      Noon: {
        min: 100,
        max: 170,
      },
      Evening: {
        min: 120,
        max: 190,
      },
      Night: {
        min: 110,
        max: 170,
      },
    },
  },
  {
    id: 4,
    name: 'Hybrid',
    image: '/cars/hybrid.webp',
    type: 'Hybrid',
    fuelType: 'Hybrid',
    seatingCapacity: '5 Seats',
    location : statesArray2,
    prices: {
      Morning: {
        min: 70,
        max: 120,
      },
      Noon: {
        min: 90,
        max: 140,
      },
      Evening: {
        min: 110,
        max: 170,
      },
      Night: {
        min: 100,
        max: 160,
      },
    },
  },
  {
    id: 5,
    name: 'Luxury',
    image: '/cars/luxury.jpg',
    type: 'Luxury',
    fuelType: 'Petrol',
    seatingCapacity: '4 Seats',
    location : statesArray3,
    prices: {
      Morning: {
        min: 100,
        max: 200,
      },
      Noon: {
        min: 120,
        max: 220,
      },
      Evening: {
        min: 140,
        max: 240,
      },
      Night: {
        min: 130,
        max: 210,
      },
    },
  },
  {
    id: 6,
    name: 'Minivan',
    image: '/cars/minvan.webp',
    type: 'Minivan',
    fuelType: 'Petrol',
    seatingCapacity: '7 Seats',
    location : statesArray2,
    prices: {
      Morning: {
        min: 120,
        max: 220,
      },
      Noon: {
        min: 140,
        max: 240,
      },
      Evening: {
        min: 160,
        max: 260,
      },
      Night: {
        min: 150,
        max: 230,
      },
    },
  },
  {
    id: 7,
    name: 'Sedan',
    image: '/cars/sedan.jpg',
    type: 'Sedan',
    fuelType: 'Diesel',
    seatingCapacity: '5 Seats',
    location : statesArray1,
    prices: {
      Morning: {
        min: 80,
        max: 130,
      },
      Noon: {
        min: 100,
        max: 150,
      },
      Evening: {
        min: 120,
        max: 170,
      },
      Night: {
        min: 110,
        max: 160,
      },
    },
  },
  {
    id: 8,
    name: 'Sports',
    image: '/cars/sports.jpg',
    type: 'Sports',
    fuelType: 'Petrol',
    seatingCapacity: '2 Seats',
    location : statesArray3,
    prices: {
      Morning: {
        min: 150,
        max: 300,
      },
      Noon: {
        min: 170,
        max: 320,
      },
      Evening: {
        min: 190,
        max: 340,
      },
      Night: {
        min: 180,
        max: 310,
      },
    },
  },
  {
    id: 9,
    name: 'SUV',
    image: '/cars/suv.webp',
    type: 'SUV',
    fuelType: 'Diesel',
    seatingCapacity: '7 Seats',
    location : statesArray2,
    prices: {
      Morning: {
        min: 130,
        max: 230,
      },
      Noon: {
        min: 150,
        max: 250,
      },
      Evening: {
        min: 170,
        max: 270,
      },
      Night: {
        min: 160,
        max: 240,
      },
    },
  },
];
