import React from 'react';
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import {Link, useParams} from "react-router-dom";
import data from "../../assets/data/beds"


const BedProductPage = () => {
    const {id} = useParams()

    return (
        <div className="container">
            <NavBar/>
            <Link to={`/furniture/${data[id].category}`}><button className="productPage__goBackButton" type={"button"}>Go back</button></Link>
            <div className="productPage__content">
                <div className="productPage__img"><img width={300} src={data[id].img} alt=""/></div>
                <div className="productPage__info">
                    <h2 className="productPage__title">{data[id].title}</h2>
                    <h3 className="productPage__category">{data[id].category}</h3>
                    <p className="productPage__description">{data[id].description}</p>
                    <img width={150} src={data[id].rating} alt=""/>
                    <h2 className="productPage__price">${data[id].price}</h2>
                    <button className="productPage__button" type={"button"}>Add to cart</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default BedProductPage;