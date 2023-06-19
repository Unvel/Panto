import React from 'react';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import chairs from "../assets/images/chair0.png"
import beds from "../assets/images/bed.png"
import sofas from "../assets/images/sofa.png"
import lamps from "../assets/images/lamp.png"
import CategoryCard from "../components/CategoryCard";
import {Link} from "react-router-dom";

const categories = [
    {id:1,  img: chairs, title: "Chairs"},
    {id:2,  img: beds, title: "Beds"},
    {id:3,  img: sofas, title: "Sofas"},
    {id:4,  img: lamps, title: "Lamps"}
]

const Furniture = () => {
    return (
        <div className="container">
            <NavBar/>
            <div className="categories__cards">
                {categories.map((category) => (
                    <Link to={category.title} ><CategoryCard category = {category}/></Link>
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default Furniture;