import React from 'react';
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import { FaFacebook, FaGithub, FaTwitter, FaInstagram, } from 'react-icons/fa';
import { BiCopyright } from "react-icons/bi";
import './AppFooter.css';

function AppFooter() {

    return (
        <div className="app-main" id="footer">
            <div className="app-contact">


                <section className="footer-section">
                    <div className="footer-grid">
                        <Roll rigth>
                            <div className="footer-image">
                                <div className="image-bio">

                                </div>
                            </div>
                        </Roll>
                        <div className="footer-about">
                            <div className="footer-bio">
                                <Zoom rigth>
                                    <h3>about</h3>
                                    <p>
                                    This website is a project on Selected Topics in CS subjects. 
                                    In which I have made content about cacti, you can get a brief overview of the cactus. 
                                    I got the information and prototype website from 
                                    <a href="https://www.homestratosphere.com/"> Home Stratosphere</a>, 
                                    there's still a lot of interesting stuff there.
                                    </p>
                                </Zoom>
                            </div>

                            <div className="footer-flex">
                                <Zoom rigth>
                                    <h4 className="follow">
                                        <span className="before"></span>
                                        <span className="content-center">follow me</span>
                                        <span className="after"></span>
                                    </h4>
                                </Zoom>

                                <Slide bottom>
                                    <a href="https://www.facebook.com/sirinya.baokhum/">
                                        <span className="sci">
                                            <FaFacebook size={40} />
                                        </span>
                                    </a>
                                    <a href="https://www.instagram.com/1012zin2000/">
                                        <span className="sci">
                                            <FaInstagram size={40} />
                                        </span>
                                    </a>
                                    <a href="https://twitter.com/1012zin2000">
                                        <span className="sci">
                                            <FaTwitter size={40} />
                                        </span>
                                    </a>
                                    <a href="https://github.com/Noey10">
                                        <span className="sci">
                                            <FaGithub size={40} />
                                        </span>
                                    </a>
                                </Slide>
                            </div>

                        </div>

                    </div>
                </section>

            </div>

            <div className="app-end">

                <p><BiCopyright /> 2021. All Rights Reserved</p>

            </div>

        </div>
    );
}

export default AppFooter;