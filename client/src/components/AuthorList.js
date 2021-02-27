import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import Delete from './Delete';
// import axios from 'axios';
import '../styles/style.css'

export default props => {
    const [authors, setAuthors] = useState([]);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(authors => authors._id !== authorId))
    }

    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Avaliable</th>
                    </tr>
                </thead>
                <tbody>
                    {props.authors.sort((auth, index) => (auth.name.toLowerCase() > index.name.toLowerCase()) ? 1 : -1).map((author, idx) => {
                        return (
                            <tr key={idx}>
                                <td><Link to={`/${author._id}`}><h1>{author.name}</h1></Link></td>
                                <td>
                                    <button onClick={(e) => navigate(`/${author._id}/edit`)}>Edit</button>
                                    <Delete authorId={author._id} successCallback={() => removeFromDom(author._id)} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}