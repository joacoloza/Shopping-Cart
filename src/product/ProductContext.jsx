import React, {createContext,useState,useEffect} from "react";

export const ProductContext = createContext();

export const ProducProvider = ({children}) => {
    const [products,setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect (()=>{
        fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(data => {
            setProducts(data);
            console.log("Products fetched:", data); // Verifica los productos obtenidos
          })
          .catch(error => console.error(error));
      },[]);

      const addToCart = (product) => {
        setCartItems(prevItems => [...prevItems, product]);
      };
    
      const deleteFromCart = (productId) => {
        setCartItems(prevItems => {
          const index = prevItems.findIndex(item => item.id === productId);
          if (index !== -1) {
            const updatedItems = [...prevItems];
            updatedItems.splice(index, 1);
            return updatedItems;
          }
          return prevItems;
        });
      };

    return (
        <ProductContext.Provider value = {{products,cartItems,addToCart,deleteFromCart}}>
            {children}
        </ProductContext.Provider>
    );
};