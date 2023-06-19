import React from 'react';
import sofas from "../../assets/data/sofas";
import ProductCard from "../../components/ProductCard";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import {Link} from "react-router-dom";

const SofasPage = () => {
    return (
        <div className="container">
            <NavBar/>
            <Link to={`/furniture`}><button className="productPage__goBackButton" type={"button"}>Go back</button></Link>
            <div className="category__productList">
                {sofas.map(item => (
                    <div className="productPage__outer">
                        <ProductCard key={item.id} item = {item}/>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default SofasPage;