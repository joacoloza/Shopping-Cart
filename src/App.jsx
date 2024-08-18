import { useContext, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Product from './product/Product';
import { ProductContext } from './product/ProductContext';
import './App.css';
import cartIcon from './svgs/cart-shopping-solid.svg';

function App() {
  const { products, cartItems, addToCart, deleteFromCart } = useContext(ProductContext);
  const totalItems = cartItems.length;
  const [visibleProducts, setVisibleProducts] = useState(3);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 3);
      }
    }, {
      rootMargin: '100px',
    });

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className='navBar'>
        <span>Awesome Market</span>
        <div className='linkDiv'>
          <Link className='link' to="/">Shop</Link>
          {products.length > 0 ? (
            <Link className='link'   to="/Cart" state={{ products: products }}>
              <div className='cartIcon'>
                <span>{totalItems}</span>
                <img className='icon'  src={cartIcon} alt="cart icon svg" />
              </div> 
            </Link>
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>

      <div className='productsWrapper'>
        {products.length > 0 ? (
          products.slice(0, visibleProducts).map(product => (
            <Product
              key={product.id}
              name={product.title}
              price={product.price}
              image={product.image}
              productId={product.id}
              onAdd={()=> addToCart(product)}
              onDelete={()=> deleteFromCart(product.id)}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
        {/* Sentinela */}
        <div ref={loadMoreRef} style={{ height: '1px', backgroundColor: 'transparent' }}></div>
      </div>
    </>
  );
}

export default App;
