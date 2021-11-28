import React,  { useState } from 'react';
import axios from 'axios';

export default () => {

    const[array, setReversedArray] = useState([]);
    const [number, setNumber] = useState('');
    
    
    const onSubmit = async (event) => {
        event.preventDefault();

        const reversedArray = await axios.post('http://localhost:5000/', {
            number 
    });
        setReversedArray(reversedArray);
      
    };

    return <div>
        <form onSubmit={onSubmit}> 
            <div className="form-group">
                <label>Enter Number</label>
                <input value={number} onChange={(e) => setNumber(e.target.value)}  className="form-control" />
            </div>
            <button className="btn btn-primary">Submit</button>
            {array.data != undefined ? <h1>{array.data + ","}</h1> : <></>}
            {console.log(array.data)} 
        </form>
    </div>
};