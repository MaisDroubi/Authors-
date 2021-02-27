import React from 'react';
import axios from 'axios';
import  '../styles/style.css'


export default props => {
    const {authorId, successCallback} = props;

    const deleteAuthor =(e) => {
        axios.delete(`http://localhost:8000/api/author/${authorId}`)
        .then(res => successCallback(authorId));
    }
    return (
        <button onClick={deleteAuthor}>Delete</button>
    )
}