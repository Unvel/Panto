import React from 'react';
import beds from "../../assets/data/beds";
import ProductCard from "../../components/ProductCard";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import {Link} from "react-router-dom";


const BedsPage = () => {
    return (
        <div className="container">
            <NavBar/>
            <Link to={`/furniture`}><button className="productPage__goBackButton" type={"button"}>Go back</button></Link>
            <div className="category__productList">
                {beds.map(item => (
                    <div className="productPage__outer">
                        <ProductCard key={item.id} item = {item}/>
                    </div>

                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default BedsPage;