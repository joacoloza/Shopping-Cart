import { useEffect, useState } from "react";
import cartIcon from '../svgs/cart-shopping-solid.svg'
import  "./ProductStyle.css"

const Product = ({name,price,image,productId,onAdd,onDelete}) => {
    
    const[count,setCount] = useState(0);  
    
    const incrementCount = () => {
        setCount(prevCount => {
            return prevCount + 1;
        });
        onAdd();
    };

    return (
        <div className="productWrapper">
            <img className="productImg" src={image}  alt={name}/>
            <h4>{name}</h4>
            <p>${price} </p>
            <button className="productBtn" onClick={incrementCount}>
                <span className="iconContainer">
                    <img className='iconProduct'  src={cartIcon} alt="cart icon svg" />
                </span>
                <p className="text">Add to Cart</p>
            </button>
        
        </div>
    ) 
}

export default Product;

/*
first the obj is created
fetch data from API and asign those data values to object
create an html for the object
*/ 