import React, { useState } from 'react';

const Usestate = () => {
    const [color, setColor] = useState('red');
    const [car, setCar] = useState({
        brand: 'BMW',
        model: '320i',
        year: 2020,
        color: 'blue'
    });

    const updateColor = () => {
        setCar(previousCar => {
            return { ...previousCar, color: 'yellow',year: 2021 };
        });
    };

    return (
        <div>
            <h1 style={{ color: color }}>Hello</h1>
            <button type='button' onClick={updateColor}>Update Color</button>
            <h3> I am having a {car.brand} car whose model number is {car.model}, {car.color} in color manufactured in year {car.year} </h3>
        </div>
    );
};

export default Usestate;
