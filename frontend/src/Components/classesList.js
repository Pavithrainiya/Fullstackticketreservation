// src/components/ClassesList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClassesList = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axios.get('/api/classes')
            .then(response => setClasses(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Classes</h1>
            <ul>
                {classes.map(cls => (
                    <li key={cls._id}>{cls.title} - {cls.instructor}</li>
                ))}
            </ul>
        </div>
    );
};

export default ClassesList;
