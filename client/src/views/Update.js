import React, {useState, useEffect} from 'react';
import AuthorForm from '../components/AuthorForm';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

export default (props) => {
    const {id} = props;
    const [author, setAuthor] = useState();
    const [errors, setErrors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    console.log(id);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(response => {
            setAuthor(response.data)
            setLoaded(true)
        })
    },[]);

    const editAuthor = (updatedAuthor) => {
        axios.put(`http://localhost:8000/api/author/${id}`, updatedAuthor)
        .then(res => {
            console.log(res);
            navigate("/");
        })
        .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }

    return(
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/">Home</Link>
            <div>
                <h4>Edit this Author</h4>
                {loaded && <AuthorForm onSubmitProp={editAuthor} initialName={author.name} errors={errors}/>}
            </div>
        </div>
    )
}