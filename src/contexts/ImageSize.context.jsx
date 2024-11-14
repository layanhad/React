/*
    1. create context 
    2. create a provider inside a function that is nested inside child
    3. pass relavent info as a value inside provider
*/

import { createContext } from "react";

export const imageSizeContext = createContext ();

export default function ImageSizeProvider(props){
    console.log('props: ',props);
    return (
        <imageSizeContext.Provider value={{imageSize : props.imageSize}}>
            {props.children}
        </imageSizeContext.Provider>
    )
}


