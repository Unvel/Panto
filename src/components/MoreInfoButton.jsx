import React from 'react';
import arrow from "../assets/images/arrow.png"

const MoreInfoButton = (props) => {
    return (
        <div className="moreInfoBtn">
            <a href={props} className="moreInfoBtn__text">{props.title}</a>
            <img src={arrow} alt="" className="moreInfoBtn__arrow"/>
        </div>
    );
};

export default MoreInfoButton;