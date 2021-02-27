import React, {useState} from 'react';
import {navigate} from '@reach/router';
import Button from 'react-bootstrap/Button';
import '../styles/style.css';

export default props => {
    const {initialName, onSubmitProp} = props;
    const [name, setName] = useState(initialName);
    

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name});
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
                </div>
                <button type="submit">Submit</button>
            </form>
            <button onClick={()=> navigate("/")}>Cancel</button>
            {props.errors.map((err, index) => <p key={index}>{err}</p>)}
            
            
        </div>
    )
}