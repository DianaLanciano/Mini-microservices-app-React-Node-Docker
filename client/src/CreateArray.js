import React,  { useState } from 'react';
import axios from 'axios';
import './styles.css';

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

    const dataReciver = () => {
        if(array.data === "Peek a number between 1-1000"){
            return <h2>Peek a number between 1-1000</h2>;
        } else {
            return array.data.map(number => <li key={number}>{number}</li>);
        }
    }

    return <div>
        <form onSubmit={onSubmit}> 
            <div className="form-group">
                <label>Enter Number</label>
                <input value={number} onChange={(e) => setNumber(e.target.value)}  className="form-control" />
            </div>
            <button className="btn btn-primary">Submit</button>
            <div className="scroller">
            {array.data !== undefined ? dataReciver() : <></>}
            </div>
            
        </form>
    </div>
};