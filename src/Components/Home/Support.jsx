import React, { useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaQuestionCircle, FaDollarSign, FaBook, FaTools } from 'react-icons/fa';
const Support = () => {
    const [Selected, SetSelected] = useState(null);
    const Inputref = useRef();
    const QueryArray = [
        { name: 'Getting Started', icon: <FaQuestionCircle /> },
        { name: 'Pricing & Plans', icon: <FaDollarSign /> },
        { name: 'Usage Guide', icon: <FaBook /> },
        { name: 'Technical Help', icon: <FaTools /> },
    ];
    const HandleQuery = () => {
        let UserQuery = Inputref.current.value;
        const QueryObject = { Question: UserQuery, Options: Selected };
        if (!QueryObject.Options || !QueryObject.Question) {
            alert("empty data")
        }
        else {
            console.log(QueryObject)
            SetSelected(null)
            Inputref.current.value = ""
        }
    }
    return (
        <div className='support'>
            <h1>Hello, How can we help you?</h1>
            <div className="queBox">
                <FaSearch className='searchicons' /><input ref={Inputref} type="text" placeholder='Ask a Question' />
                <button onClick={HandleQuery}>Search</button>
            </div>
            <h6>Or choose a Category to quickly And the help you need</h6>
            <div className="query_checkbox">
                {QueryArray.map((item) => {
                    return <div className="query_card" key={item.name} onClick={() => SetSelected(item.name)}
                        style={{
                            border: `${item.name === Selected ? "2px solid grey" : "none"}`,
                        }}
                    >
                        <strong className="icons_set">
                            {item?.icon}
                        </strong>
                        <span>{item.name}</span>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Support
