import React, { useEffect, useState } from 'react';
import {navigate } from '@reach/router';
import Delete from '../components/Delete';
import axios from 'axios';
import  '../styles/style.css'

export default props => {
    const [author, setAuthor] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${props.id}`)
            .then(res => setAuthor({
                ...res.data
            }))
    }, [])

    return (
        <div>
            <h1>{author.name}</h1>
            <button onClick={(e) => navigate(`/`)}>Back</button>
            <button onClick={(e) => navigate(`/${author._id}/edit`)}>Edit</button>
            <Delete authorId={author._id} successCallback={() => navigate("/")} />
        </div>
    )
}