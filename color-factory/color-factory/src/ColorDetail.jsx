import React from 'react';
import { useParams } from 'react-router-dom';

const ColorDetail = () => {
    const { color } = useParams();

    // Here you can fetch more details about the color using 'color' parameter
    // For simplicity, I'm just showing the color name

    return (
        <div>
            <h1>{color}</h1>
            {/* You can add more details about the color here */}
        </div>
    );
};

export default ColorDetail;
