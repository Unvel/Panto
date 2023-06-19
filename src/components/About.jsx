import React from 'react';
import photo1 from "../assets/images/experiences.png"
import photo2 from "../assets/images/materials1.png"
import photo3 from "../assets/images/materials2.png"
import photo4 from "../assets/images/materials3.png"
import MoreInfoButton from "./MoreInfoButton";

const About = () => {
    return (
        <div className="about">
            <a name="about"></a>
            <div className="about__experiences" >
                <div className="about__experiences__illustration">
                    <div className="about__experiences__illustration__img"><img src={photo1} alt=""/></div>
                    <div className="about__experiences__illustration__figure1"></div>
                    <div className="about__experiences__illustration__figure2"></div>
                    <div className="about__experiences__illustration__figure3"></div>
                </div>
                <div className="about__experiences__info">
                    <div className="about__experiences__info__title">experiences</div>
                    <div className="about__experiences__info__text">we provide you the best experience</div>
                    <div className="about__experiences__info__description">You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</div>
                    <MoreInfoButton href={"#"} title={"More Info"}/>
                </div>
            </div>
            <div className="about__materials">
                <div className="about__materials__illustration">
                    <div className="about__materials__illustration__img"><img src={photo2} alt=""/></div>
                    <div className="about__materials__illustration__img1"><img src={photo3} alt=""/></div>
                    <div className="about__materials__illustration__img2"><img src={photo4} alt=""/></div>
                    <div className="about__materials__illustration__figure1"></div>
                    <div className="about__materials__illustration__figure2"></div>
                </div>
                <div className="about__materials__info">
                    <div className="about__materials__info__title">Materials</div>
                    <div className="about__materials__info__text">Very serious <br/> materials for making furniture</div>
                    <div className="about__materials__info__description">Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</div>
                    <MoreInfoButton href={"#"} title={"More Info"}/>
                </div>
            </div>
        </div>
    );
};

export default About;