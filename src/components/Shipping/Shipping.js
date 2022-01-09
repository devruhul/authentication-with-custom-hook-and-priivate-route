import React from 'react';
import { useLocation } from 'react-router-dom';


const Shipping = () => {
    let location = useLocation()

    return (
        <div>
            {location}
            <h2>this is shipping</h2>
        </div>
    );
};

export default Shipping;