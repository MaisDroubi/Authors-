import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import PersonForm from '../components/PersonForm';
import AuthorList from '../components/AuthorList';
import {Link} from '@reach/router';
export default () => {
    const [authors, setAuthors] = useState([]);

    axios.get('http://localhost:8000/api/authors')
    .then(response => {
        setAuthors(response.data);
    },[])
   
    return (
        <div>
           <h1>Favorite Authors</h1>
           <Link to={"/new"}>Add an Author</Link>
           <h4>We have quotes by:</h4>
           <AuthorList authors={authors} />
        </div>
    )
}