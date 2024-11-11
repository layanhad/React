import React, { useRef } from 'react';
import './ImageToggle.css';
import image1Color from '../../assets/images/dog1.jpg'
import image1BlackWhite from '../../assets/images/dog1-black-white.jpg'
import image2Color from '../../assets/images/dog2.jpg'
import image2BlackWhite from '../../assets/images/dog2-black-white.jpg'

const ImageToggle = () => {

    const image1Ref = useRef(null);
    const image2Ref = useRef(null);

    const handleMouseEnter = (ref, colorSrc) => {
        if (ref.current) {
          ref.current.src = colorSrc;
        }
    };

    const handleMouseLeave = (ref, blackwhitewSrc) => {
        if (ref.current) {
          ref.current.src = blackwhitewSrc;
        }
    };
    

    return(
       <div className='image-container'>
            <img ref={image1Ref} src={image1BlackWhite}
            onMouseEnter={() => handleMouseEnter(image1Ref, image1Color)}
            onMouseLeave={() => handleMouseLeave(image1Ref, image1BlackWhite)}
            />  

            <img ref={image2Ref} src={image2BlackWhite}
            onMouseEnter={() => handleMouseEnter(image2Ref, image2Color)}
            onMouseLeave={() => handleMouseLeave(image2Ref, image2BlackWhite)}
            />  
       </div>
    )
}

export default ImageToggle;