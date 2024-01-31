import React from 'react'
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { BsFillEnvelopeCheckFill } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";


const WhyChoose = () => {
    const faqData = [
        {
            id: 1,
            icon: <BsFillCreditCard2FrontFill color='springgreen' />,
            title: 'No Credit Card Needed',
            description: 'Tap the Rent icon in the Uber app and complete your reservation. You can choose to pay in advance to save money.',
        },
        {
            id: 2,
            icon: <BsFillEnvelopeCheckFill color='red' />,
            title: 'Super Fast Check-in',
            description: 'Tap the Rent icon in the Uber app and complete your reservation. You can choose to pay in advance to save money.',
            class: "Fc2 "
        },
        {
            id: 3,
            icon: <IoNewspaperOutline color='orangered' />,
            title: 'No Extra Costs on Arrival',
            description: 'Tap the Rent icon in the Uber app and complete your reservation. You can choose to pay in advance to save money.',
            class:                "Fc3"

        },
    ];
    return (
        <div className='whychoose'>
            <div className="why_details">
                <span>--</span>
                <div className="faq">
                    <h1>Why Book With <br />
                        Us</h1>
                    <p>Easy way to catch our services with simple three
                        steps with rentals powered by rental car partners</p>
                   {faqData.map((data)=>{
                    return  <div className={`faq_card ${data.class}  `} key={data.id}>
                    <div className="head">
                        {data.icon}
                        <h3>{data.title}</h3>
                    </div>
                    <div className="details">
                        <p>{data.description}</p>
                    </div>
                </div>
                   })}
                </div>
            </div>
            <div className="why_images">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/ability-to-work-everywhere-9343871-7606909.png?f=webp" alt="" />
            </div>
        </div>
    )
}

export default WhyChoose
