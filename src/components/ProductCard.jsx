import React from 'react';
import addToCartBtn from "../assets/images/AddToCartBtn.png"
import {Link} from "react-router-dom";
import cart from "../assets/data/cart";

const ProductCard = (props) => {

    const addToCart = (item) => {
        if(cart.length !== 0) {
            for (let i = 0; i < cart.length ; i++) {
                if (item === cart[i]) {
                    console.log("equal")
                    item.count++
                }
                else {
                    if (item.count === 0) {
                        cart.push(item)
                        item.count++
                    }
                    else item.count++
                    break
                }
            }
        }
        else {
            console.log("else")
            cart.push(item)
            item.count++
        }
    }

    return (
        <div className="product__card">
            <div className="product__card__img__box"><Link to={`/furniture/${props.item.category}/${props.item.id}`}><img src={props.item.img} alt={"image" + props.id} className="product__card__img"/> </Link></div>
            <div className="product__card__info">
                <p className="product__card__category">{props.item.category}</p>
                <h3 className="product__card__title"><Link to={`/furniture/${props.item.category}/${props.item.id}`}> {props.item.title} </Link></h3>
                <img src={props.item.rating} alt="" className="product__card__rating"/>
                <div className="product__card__purchase">
                    <h3 className="product__card__price"> <span className="product__card__price__dollar">$</span>  {props.item.price}</h3>
                    <img src={addToCartBtn} alt="" className="product__card__addToCartBtn" onClick={() => addToCart(props.item)}/>
                </div>
            </div>
        </div>


    );
};

export default ProductCard;
