import React from 'react';
import { Link } from 'react-router-dom';

const ColorsList = () => {
    // Assume colors is an array of color objects [{ name: string, hex: string }, ...]
    const colors = [
        { name: 'Red', hex: '#FF0000' },
        { name: 'Green', hex: '#00FF00' },
        { name: 'Blue', hex: '#0000FF' }
        // Add more colors as needed
    ];

    return (
        <div>
            <h1>Colors</h1>
            <ul>
                {colors.map((color, index) => (
                    <li key={index}>
                        <Link to={`/colors/${color.name.toLowerCase()}`}>
                            {color.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to="/colors/new">Add New Color</Link>
        </div>
    );
};

export default ColorsList;
