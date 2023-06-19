import React from 'react';
import MoreInfoButton from "./MoreInfoButton";


const BrandInfo = () => {
    return (
        <div className="container">
            <div className="brandInfo">
                <div className="brandInfo__text">Why <br/> Choosing Us</div>
                <div className="brandInfo__item">
                    <h3 className="brandInfo__item__title">Luxury facilities</h3>
                    <p className="brandInfo__item__description">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                    <MoreInfoButton href={"#"} title={"More Info"}/>
                </div>
                <div className="brandInfo__item">
                    <h3 className="brandInfo__item__title">Affordable Price</h3>
                    <p className="brandInfo__item__description">You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
                    <MoreInfoButton href={"#"} title={"More Info"}/>
                </div>
                <div className="brandInfo__item">
                    <h3 className="brandInfo__item__title">Many Choices</h3>
                    <p className="brandInfo__item__description">We provide many unique work space choices so that you can choose the workspace to your liking.</p>
                    <MoreInfoButton href={"#"} title={"More Info"}/>
                </div>
            </div>
        </div>
    );
};

export default BrandInfo;