import { useEffect, useState } from "react";
import "./cartItemStyle.css";


const CartItem = ({name,price,image,productId,acumulatedCount,onAdd,onDelete,}) => {
    
    const [count, setCount] = useState(acumulatedCount);

    // Si acumulatedCount cambia, sincroniza el estado count
    useEffect(() => {
      setCount(acumulatedCount);
    }, [acumulatedCount]);

    const incrementCount = () => {
        console.log(count)
        setCount(prevCount => {
            return prevCount + 1;
        });
        onAdd();
    };

    const decrementCount = () => {
        if (count > 1) {
            setCount((prevCount) => {
                return prevCount - 1;
            });
            onDelete(productId);
        } else if (count === 1) {
            setCount(0);
            onDelete(productId);
        }
    };

    return (
        <div className="cartItemWrapper">
            <img className="cartItemImg" src={image}  alt={name}/>
            <h3>{name}</h3>
            <div className="cartItemCounter">
                <button className="addBtn" onClick = {incrementCount} >+</button>
                <h2>{count}</h2>
                <button className="subBtn" onClick={decrementCount}>-</button>
            </div>
            <p>{price}</p>
        </div>
    ) 
}

export default CartItem;

/*
first the obj is created
fetch data from API and asign those data values to object
create an html for the object
*/ 