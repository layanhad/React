import React from 'react';
import Box4 from './Box4';

const Box3 = () => {
    const style = {
        backgroundColor: 'pink',
        padding: '10px',
    };

    return (
        <div style={style}>
            <Box4 />
            <Box4 />
        </div>
    );
};

export default Box3;
