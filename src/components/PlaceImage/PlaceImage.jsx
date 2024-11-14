import { getImageUrl } from '../../utils';
import {imageSizeContext} from '../../contexts/ImageSize.context';
import {useContext} from 'react';

export default function PlaceImage({ place}) {
    const imageSize  = useContext(imageSizeContext); 
    console.log('inside placeImage:', imageSize)
    return (
        <img
            src={getImageUrl(place)}
            alt={place.name}
            width={imageSize.imageSize}
            height={imageSize.imageSize}
        />
    );
}
