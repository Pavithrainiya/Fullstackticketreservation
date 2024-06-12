
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageClasses = () => {
    const [classes, setClasses] = useState([]);
    const [newClass, setNewClass] = useState({ title: '', instructor: '', time: '' });

    useEffect(() => {
        axios.get('/api/classes')
            .then(response => setClasses(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewClass({ ...newClass, [name]: value });
    };

    const addClass = () => {
        axios.post('/api/classes', newClass)
            .then(response => {
                setClasses([...classes, response.data]);
                setNewClass({ title: '', instructor: '', time: '' });
            })
            .catch(error => console.error(error));
    };

    const deleteClass = (id) => {
        axios.delete(`/api/classes/${id}`)
            .then(() => {
                setClasses(classes.filter(cls => cls._id !== id));
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Manage Classes</h1>
            <div>
                <h2>Add New Class</h2>
                <input type="text" name="title" placeholder="Title" value={newClass.title} onChange={handleInputChange} />
                <input type="text" name="instructor" placeholder="Instructor" value={newClass.instructor} onChange={handleInputChange} />
                <input type="text" name="time" placeholder="Time" value={newClass.time} onChange={handleInputChange} />
                <button onClick={addClass}>Add Class</button>
            </div>
            <div>
                <h2>Existing Classes</h2>
                <ul>
                    {classes.map(cls => (
                        <li key={cls._id}>
                            {cls.title} - {cls.instructor} - {cls.time}
                            <button onClick={() => deleteClass(cls._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ManageClasses;
