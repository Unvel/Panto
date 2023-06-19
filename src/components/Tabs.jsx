import React, {useState} from 'react';
import ChairSlider from "./ChairSlider";
import BedSlider from "./BedSlider";
import SofaSlider from "./SofaSlider";
import LampSlider from "./LampSlider";
import MoreInfoButton from "./MoreInfoButton";
import {Link} from "react-router-dom";



const Tabs = () => {

    const [activeTab, setActiveTab] = useState(0)
    const toggleTab = (index) => {
        setActiveTab(index)
    }

    return (
        <div className="tabs">
            <h1 className="tabs__bestSellers">Best Selling Products</h1>
        <div className="container">
                <div className="tab__panel">
                    <div className="tab__buttonPanel">
                        <button className={activeTab === 0 ? "tab__Button tab__button__active" : "tab__Button"} onClick={() => toggleTab(0)}>Chair</button>
                        <button className={activeTab === 1 ? "tab__Button tab__button__active" : "tab__Button"} onClick={() => toggleTab(1)}>Beds</button>
                        <button className={activeTab === 2 ? "tab__Button tab__button__active" : "tab__Button"} onClick={() => toggleTab(2)}>Sofa</button>
                        <button className={activeTab === 3 ? "tab__Button tab__button__active" : "tab__Button"} onClick={() => toggleTab(3)}>Lamp</button>
                    </div>
                </div>
                <div className={activeTab === 0 ? "tab tab__active" : "tab"}>
                    <ChairSlider/>
                    <div className="tab__viewAll">
                        <Link to={"/furniture/Chairs"}>
                            <MoreInfoButton title={"View All"}/>
                        </Link>
                    </div>
                </div>
                <div className={activeTab === 1 ? "tab tab__active" : "tab"}>
                    <BedSlider/>
                    <div className="tab__viewAll">
                        <Link to={"/furniture/Beds"}>
                            <MoreInfoButton title={"View All"}/>
                        </Link>
                    </div>
                </div>
                <div className={activeTab === 2 ? "tab tab__active" : "tab"}>
                    <SofaSlider/>
                    <div className="tab__viewAll">
                        <Link to={"/furniture/Sofas"}>
                            <MoreInfoButton title={"View All"}/>
                        </Link>
                    </div>
                </div>
                <div className={activeTab === 3 ? "tab tab__active" : "tab"}>
                    <LampSlider/>
                    <div className="tab__viewAll">
                        <Link to={"/furniture/Lamps"}>
                            <MoreInfoButton title={"View All"}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;