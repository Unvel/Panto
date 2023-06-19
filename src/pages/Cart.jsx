import React, {useEffect, useReducer} from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import cart from "../assets/data/cart";
import CartItem from "../components/CartItem";

const Cart = () => {

    let cartTotal = 0;

    const CartRendering = () => {
        if(cart.length !== 0) {
           return <div className="cart__purchaseSection">
               <h2>Total: ${cartTotal}</h2>
               <button type={"button"} className="cartItem__purchaseButton">Buy</button>
           </div>

        }
        else return <div className="cart__empty">
            <h2>The cart is empty!</h2>
        </div>
    }

    useEffect(()=> {
        forceUpdate();
    });

    for (let i = 0; i < cart.length; i++) {
        cartTotal += cart[i].price * cart[i].count
    }
    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);
    return (
        <div className="container">
            <NavBar/>
            {cart.map(item =>
                <CartItem item={item}/>
            )}
            <CartRendering/>
            <Footer/>
        </div>
    );
};

export default Cart;