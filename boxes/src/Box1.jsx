import React from 'react';
import Box2 from './Box2';

const Box1 = () => {
    const style = {
        backgroundColor: 'green',
        width: '150px',
        padding: '10px',
    };

    return (
        <div style={style}>
            <Box2 />
        </div>
    );
};

export default Box1;
