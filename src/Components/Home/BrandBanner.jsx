import React from 'react'

const BrandBanner = () => {
    const imageArray = [
        {path : '../1.png',name :'images/cars'},
        {path : '../2.png',name :'images/cars'},
        {path : '../3.png',name :'images/cars'},
        {path : '../4.png',name :'images/cars'},
        {path : '../5.png',name :'images/cars'},
        {path : '../6.png',name :'images/cars'},
        {path : '../7.png',name :'images/cars'},
        {path : '../8.png',name :'images/cars'},
    ]
    return (
        <div className='BrandBanner'>
            {imageArray.map((img)=>{
                return <img src={img.path} alt={img.name} />
            })}
        </div>
    )
}

export default BrandBanner
