import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { Link, navigate } from '@reach/router';
export default () => {
    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState([]);

    const addNewAuthor = (newAuthor) => {
        axios.post('http://localhost:8000/api/author/new', newAuthor)
            .then(response => {
                setAuthors([
                    ...authors,
                    response.data
                ]);
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

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={"/"}>Home</Link>
            <h4>Add a new author:</h4>
            <AuthorForm onSubmitProp={addNewAuthor} initialName={""} errors={errors} />
            </div>
    )
}