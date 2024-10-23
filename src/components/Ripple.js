import React, { useState, useEffect } from 'react';
import './Ripple.css'; // We'll create the CSS for this

const Ripple = () => {
    const [rippleArray, setRippleArray] = useState([]);

    useEffect(() => {
        let timeout;
        if (rippleArray.length > 0) {
            timeout = setTimeout(() => setRippleArray([]), 600); // Clear ripple after animation
        }
        return () => clearTimeout(timeout);
    }, [rippleArray]);

    const addRipple = (e) => {
        const rippleContainer = e.currentTarget.getBoundingClientRect();
        const size = rippleContainer.width > rippleContainer.height ? rippleContainer.width : rippleContainer.height;
        const x = e.clientX - rippleContainer.left - size / 2;
        const y = e.clientY - rippleContainer.top - size / 2;

        const newRipple = {
            x,
            y,
            size,
        };

        setRippleArray([...rippleArray, newRipple]);
    };

    return (
        <div className="ripple-container" onMouseDown={addRipple}>
            {rippleArray.map((ripple, index) => (
                <span
                    key={index}
                    style={{
                        top: ripple.y,
                        left: ripple.x,
                        width: ripple.size,
                        height: ripple.size,
                    }}
                    className="ripple"
                />
            ))}
        </div>
    );
};

export default Ripple;
