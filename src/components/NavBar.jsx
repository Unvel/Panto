import React, {useEffect, useReducer, useState} from 'react';
import cartImg from "../assets/images/cart.png"
import {Link} from "react-router-dom";
import cart from "../assets/data/cart";
import burger from "../assets/images/burger-icon.png"
const NavBar = () => {

    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);
    const [burgerMenu, setBurgerMenu] = useState(false)

    useEffect(()=> {
        forceUpdate();
    },[reducerValue]);

    let deviceWidth = window.innerWidth;

    const burgerMenuHandler = () => {
        setBurgerMenu(!burgerMenu)
    }

    if (deviceWidth >= 769)
        return (
            <div className={"navbar"}>
                <div className="navbar__desktop">
                    <Link to="/" ><div className="navbar__logo">Panto</div></Link>
                    <div className="navbar__nav">
                        <div className="navbar__nav__item"><Link to="/">Home</Link></div>
                        <div className="navbar__nav__item"><Link to="/furniture">Furniture</Link></div>
                        <div className="navbar__nav__item"><Link to="/about" >About</Link></div>
                        <div className="navbar__nav__item"> <Link to="/contacts">Contacts </Link></div>
                    </div>
                    <div className="navbar__cart">
                        <Link to="/cart">
                            <img src={cartImg} alt=""/>
                            <div className="navbar__cart__content">{cart.length}</div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    else if (deviceWidth < 769) return (
        <div className={"navbar"}>
            <div className="navbar__burger">
                <Link to="/" ><div className="navbar__logo">Panto</div></Link>
                <button type={"button"} onClick={burgerMenuHandler} className="burgerMenu__button">
                    <img className={"burger__icon"} width={64} src={burger} alt="menu"/>
                </button>
                <div className={burgerMenu ? 'burger__menu burger__active' : 'burger__menu'}>
                    <div className="navbar__nav">
                        <div className="navbar__nav__item"><Link to="/">Home</Link></div>
                        <div className="navbar__nav__item"><Link to="/furniture">Furniture</Link></div>
                        <div className="navbar__nav__item"><Link to="/about" >About</Link></div>
                        <div className="navbar__nav__item"> <Link to="/contacts">Contacts </Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;