import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext=createContext();
export const ProductProvider=({children})=>{
    const [Coffee,setCoffee]=useState([]);
    
    // useEffect(()=>{
    //     const fetchProduct=async()=>{
    //         const response=await fetch(url);
    //         const product=await response.json();
    //         setCoffee(product[0].data);     
    //     }
    //     fetchProduct()
    // },[])
    useEffect(()=>{
        axios.get('https://coffee-api-nu.vercel.app/')
        .then(response=>setCoffee(response.data[0].data))
        .catch(error=>console.log(error))
    },[])
    return (
        <ProductContext.Provider value={{Coffee}}>
            {children}
        </ProductContext.Provider>
    );
}
