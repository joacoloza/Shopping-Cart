import React, { useContext } from "react";
import { Link} from "react-router-dom";
import { ProductContext } from "./product/ProductContext";
import CartItem from "./cart/CartItem";
import cartIcon from './svgs/cart-shopping-solid.svg';
import './cart/cartPageStyle.css';

function Cart() {
  const {cartItems,addToCart,deleteFromCart} = useContext(ProductContext);
  
  const validCartItems = cartItems.filter(item => item !== undefined && item !== null);

  const groupedItems = validCartItems.reduce((acc, item) => {
    const foundItem = acc.find(groupedItem => groupedItem.product.id === item.id);

    if (foundItem) {
      foundItem.count += 1;
    } else {
      acc.push({ product: item, count: 1 });
    }
    return acc;
  }, []);

  const totalPrice = ()=>{
    console.log(1);
    let calculateTotal = 0;
    console.log(2);
    console.log("cartLEngth",cartItems.length);
    if(cartItems.length > 0){
      console.log(3);
      calculateTotal = cartItems.reduce((total,product) => total + product.price,0);
      console.log(4);
    }
    console.log(5);
    return Math.trunc(calculateTotal);
  }

  console.log("total Price",totalPrice())

  const totalItems = cartItems.length;

  return (
    <div>
      <div className='navBar'>
        <span>Awesome Market</span>
        <div className='linkDiv'>
          <Link className='link' to="/">Shop</Link>
          {cartItems.length > 0 ? (
            <Link className='link'   to="/Cart" state={{ cartItems: cartItems }}>
              <div className='cartIcon'>
                <span>{totalItems}</span>
                <img className='icon'  src={cartIcon} alt="cart icon svg" />
              </div> 
            </Link>
          ) : (
            <div className='cartIcon'>
            <span>{totalItems}</span>
            <img className='icon'  src={cartIcon} alt="cart icon svg" />
          </div> 
          )}
        </div>
      </div>
      <div className="mainCartWrapp">
        <div className='cartProductsWrapper'>
          {groupedItems.length > 0 ? (
              groupedItems.map(({product,count}) =>
              <CartItem
                  key={product.id}
                  name={product.title}
                  price={product.price}
                  image={product.image}
                  productId={product.id}
                  acumulatedCount={count}
                  onAdd={()=> addToCart(product)}
                  onDelete={()=> deleteFromCart(product.id)}
                  cartItems= {cartItems}
              />
          ))
          : (
            <div className="noProducts">
              <p>No Products In Cart Yet.</p>
              <Link className='linkNoProucts' to="/">See Shop</Link>
            </div>
          )}
        </div>
        <div className="buyDiv">
          <div className="cardDiv">
            <button className="cardBtn">Add Card</button>
{/*this piece of code is made by Copyright - 2024 Gianluks90 (Gianluca Marino)*/}
            <div class="card">
              <div class="foreground">
                <div class="credit-card-header">
                  <div class="category"> <strong>Credit</strong> card</div>
                  <div class="bank">bank-name</div>
                </div>
                <div class="credit-card-chip-container">
                  <svg xml:space="preserve" viewBox="0 0 511 511" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Capa_1" version="1.1" width="800px" height="800px" fill="#d4af37" class="chip">
                    <path d="M455.5,56h-400C24.897,56,0,80.897,0,111.5v288C0,430.103,24.897,455,55.5,455h400c30.603,0,55.5-24.897,55.5-55.5v-288
              C511,80.897,486.103,56,455.5,56z M464,248H343v-56.5c0-4.687,3.813-8.5,8.5-8.5H464V248z M343,263h121v65H343V263z M479,223h17v65
              h-17V223z M479,208v-65h17v65H479z M464,168H351.5c-12.958,0-23.5,10.542-23.5,23.5V408H183V103h272.5c4.687,0,8.5,3.813,8.5,8.5
              V168z M168,248H47v-65h121V248z M32,288H15v-65h17V288z M47,263h121v65H47V263z M263,88V71h137v17H263z M248,88H111V71h137V88z
              M168,103v65H47v-56.5c0-4.687,3.813-8.5,8.5-8.5H168z M32,208H15v-65h17V208z M15,303h17v65H15V303z M47,343h121v65H55.5
              c-4.687,0-8.5-3.813-8.5-8.5V343z M248,423v17H111v-17H248z M263,423h137v17H263V423z M343,408v-65h121v56.5
              c0,4.687-3.813,8.5-8.5,8.5H343z M479,303h17v65h-17V303z M496,111.5V128h-17v-16.5c0-12.958-10.542-23.5-23.5-23.5H415V71h40.5
              C477.832,71,496,89.168,496,111.5z M55.5,71H96v17H55.5C42.542,88,32,98.542,32,111.5V128H15v-16.5C15,89.168,33.168,71,55.5,71z
              M15,399.5V383h17v16.5c0,12.958,10.542,23.5,23.5,23.5H96v17H55.5C33.168,440,15,421.832,15,399.5z M455.5,440H415v-17h40.5
              c12.958,0,23.5-10.542,23.5-23.5V383h17v16.5C496,421.832,477.832,440,455.5,440z"></path>
                  </svg>
                </div>
                <div class="info-container">
                  <p class="names">Name Surname</p>
                  <p class="serial">XXXX XXXX XXXX XXXX</p>
                </div>
              </div>
              <svg viewBox="0 0 1600 800" height="100%" width="100%" class="background">
                <rect height="800" width="1600" fill="#ff9d00"></rect>
                <g transform="rotate(-30 500 100)" stroke-opacity="0.05" stroke-width="66.7" stroke="#000">
                  <circle r="1800" cy="0" cx="0" fill="#ff9d00"></circle>
                  <circle r="1700" cy="0" cx="0" fill="#fb8d17"></circle>
                  <circle r="1600" cy="0" cx="0" fill="#f47d24"></circle>
                  <circle r="1500" cy="0" cx="0" fill="#ed6e2d"></circle>
                  <circle r="1400" cy="0" cx="0" fill="#e35f34"></circle>
                  <circle r="1300" cy="0" cx="0" fill="#d85239"></circle>
                  <circle r="1200" cy="0" cx="0" fill="#cc453e"></circle>
                  <circle r="1100" cy="0" cx="0" fill="#be3941"></circle>
                  <circle r="1000" cy="0" cx="0" fill="#b02f43"></circle>
                  <circle r="900" cy="0" cx="0" fill="#a02644"></circle>
                  <circle r="800" cy="0" cx="0" fill="#901e44"></circle>
                  <circle r="700" cy="0" cx="0" fill="#801843"></circle>
                  <circle r="600" cy="0" cx="0" fill="#6f1341"></circle>
                  <circle r="500" cy="0" cx="0" fill="#5e0f3d"></circle>
                  <circle r="400" cy="0" cx="0" fill="#4e0c38"></circle>
                  <circle r="300" cy="0" cx="0" fill="#3e0933"></circle>
                  <circle r="200" cy="0" cx="0" fill="#2e062c"></circle>
                  <circle r="100" cy="0" cx="0" fill="#210024"></circle>
                </g>
              </svg>
              </div>
{/*license code ends here!*/}              
          </div>
          <div className="buyDivInfo">
            <h3>Purchase Resume</h3>
            <p>Total Items: {totalItems}</p>
            <p>Total Price:   ${totalPrice()}</p>
            <button className="cartBtn">BUY</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;