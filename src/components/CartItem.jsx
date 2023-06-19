import React, {useReducer, useState} from 'react';
import cart from "../assets/data/cart";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import trashCan from "../assets/images/delete.png"

const CartItem = (props) => {
    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);

    const [inputCount, setInputCount] = useState(props.item.count + 1 - 1)

    const [cartItemClass, setCartItemClass] = useState("cartItem__content")

    const confirmDelete = () => {
        confirmAlert({
            title: 'Item removing',
            message: 'Are you sure you want to remove this item from the cart?',
            buttons: [
                {
                    label: 'Yes, I am',
                    onClick: () => {
                        props.item.count = 0
                        cart.pop(props.item)
                        setCartItemClass("cartItem__content hidden")
                    }
                },
                {
                    label: 'No. Go back',
                }
            ],
            closeOnEscape: true,
            closeOnClickOutside: true,
        });
    };

    const countLeftHandler = () => {
        if (inputCount !== 1) {
            setInputCount(inputCount - 1)
            props.item.count--
        }
        else {
            confirmDelete()
        }
       forceUpdate()
    }
    const countRightHandler = () => {
        if (inputCount !== 99) {
            setInputCount(inputCount + 1)
            props.item.count++
        }
        forceUpdate()
    }

    return (
        <div className="container">
            <div className={cartItemClass}>
                <img className="cartItem__img" src={props.item.img} alt=""/>
                <div className="cartItem__info">
                    <h1 className="cartItem__title">{props.item.title}</h1>
                    <img src={props.item.rating} alt="" className="cartItem__rating"/>
                    <p className="cartItem__description">{props.item.description}</p>
                    <p className="cartItem__price">${props.item.price * inputCount}</p>
                    <div className="cartItem__purchaseSection">
                        <button type={"button"} className="cartItem__count countLeft" onClick={countLeftHandler} >{"<"}</button>
                        <input type="text" className="cartItem__counter" value={inputCount}/>
                        <button type={"button"} className="cartItem__count countRight" onClick={countRightHandler}>{">"}</button>
                        <button type={"button"} className="cartItem__purchaseButton">Buy</button>
                    </div>
                </div>
                <button className="trashCan__button" onClick={confirmDelete}><img width={32} height={32} src={trashCan} alt=""/></button>
            </div>
        </div>
    );
};

export default CartItem;