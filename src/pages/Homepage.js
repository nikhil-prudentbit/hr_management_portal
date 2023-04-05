import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Homepage() {
    let navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    });
    return (
        <div>Homepage</div>
    )
}

export default Homepage