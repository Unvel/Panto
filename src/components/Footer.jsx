import React from 'react';
import facebook from "../assets/images/Facebook.png"
import twitter from "../assets/images/Twitter.png"
import instagram from "../assets/images/instagram.png"
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__column1">
                        <h2 className="footer__logo">Panto</h2>
                        <h3 className="footer__slogan">The advantage of hiring a workspace with us is what gives you comfortable service and all-around facilities.</h3>
                    </div>
                    <div className="footer__column2">
                        <p className="footer__column2__category">Services</p>
                        <a href="" className="footer__column2__category__item">Email Marketing</a>
                        <a href="" className="footer__column2__category__item">Campaigns</a>
                        <a href="" className="footer__column2__category__item">Branding</a>
                    </div>
                    <div className="footer__column2">
                        <p className="footer__column2__category">Furniture</p>
                        <a href="" className="footer__column2__category__item">Beds</a>
                        <a href="" className="footer__column2__category__item">Chair</a>
                        <a href="" className="footer__column2__category__item">All</a>
                    </div>
                    <div className="footer__column3">
                        <p className="footer__column2__category">Follow Us</p>
                        <a href="" className="footer__column2__category__item"><img src={facebook} alt="" className="facebook"/>Facebook</a>
                        <a href="" className="footer__column2__category__item"><img src={twitter} alt="" className="twitter"/>Twitter</a>
                        <a href="" className="footer__column2__category__item"><img src={instagram} alt="" className="instagram"/>Instagram</a>
                    </div>
                </div>
                <div className="copyright">
                    <p className="copyright__text">Made By Unvel</p>
                    <Link className="copyright__TermsConditions" to={"/terms&conditions"}>Terms & Conditions</Link>
                    <Link className="copyright__PrivacyPolicy" to={"/privacy-policy"}>Privacy Policy</Link>
                </div>
            </div>

        </div>
    );
};

export default Footer;