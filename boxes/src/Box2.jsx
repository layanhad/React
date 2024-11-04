import React from 'react';
import Box3 from './Box3';

const Box2 = () => {
    const style = {
        backgroundColor: 'blue',
        padding: '15px',
    };

    return (
        <div style={style}>
            <Box3 />
        </div>
    );
};

export default Box2;
