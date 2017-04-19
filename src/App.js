import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.scss';

// import Navbar from './Components/Navbar/Navbar';
// import Content from './Components/Content/Content';
// import Footer from './Components/Footer/Footer';

import './css/bootstrap.scss';
import './css/font.scss';
import './css/fontello.scss';
import './css/base.scss';
import './css/main.scss';
import './css/timeline.scss';
import './css/custom.scss';

import profileImg from './img/profile.jpg';
import placeHolder from './img/portfolio/1.jpg';

// import './js/jquery-1.11.3.min.js';
// import './js/jquery-migrate-1.2.1.js';
// import './js/modernizr.js';
// import './js/placeholders.min.js';
// import './js/script.js';

class App extends Component {
    render() {
        return (
            <div className="app">
                <div id="wrapper" className="margLTop margLBottom">
                    <div className="container">
                        <div className="row ">

                            {/*<!-- START ABOUT -->*/}
                            <div className="col-md-3 nopr left-content">
                                <header id="header">
                                    <div className="main-header">
                                        <figure className="img-profile">
                                            <img src={profileImg} alt="" />
                                            {/*<!--<figcaption className="name-profile">
							        <span>Carlose smith <sup>&reg;</sup></span>
						        </figcaption>-->*/}
                                        </figure>
                                        <nav id="main-nav" className="main-nav clearfix tabbed">
                                            <ul>
                                                <li className="active">
                                                    <a href="" className="active">
                                                        <i className="icon-user"></i> Devlin Pajaron
                                        </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="bottom-header bgWhite ofsTSmall ofsBSmall tCenter">
                                        <ul className="social">
                                            <li><a href="#"><i className="icon-facebook"></i></a></li>
                                            <li><a href="#"><i className="icon-twitter"></i></a></li>
                                            <li><a href="#"><i className="icon-linkedin"></i></a></li>
                                        </ul>
                                        <p>&copy; 2015 Mutationthemes.</p>
                                    </div>
                                </header>
                            </div>
                            {/*<!-- END ABOUT -->*/}

                            {/*<!-- START RESUME -->*/}
                            <div className="col-md-9 right-content">
                                <section className="ofsInBottom">
                                    <div className="resume">
                                        {/*<!-- START SKILLS -->*/}
                                        <div className="resume-card">
                                            <div className="main-title">
                                                <h1>skills</h1>
                                                <hr />
                                            </div>
                                            <div className="content">
                                                <div className="block-content ">
                                                    <div className="services">
                                                        <div className="row ">
                                                            <div className="block service tCenter">
                                                                <div className="col-md-4">
                                                                    <div className="ico">
                                                                        <i className="icon-lifebuoy"></i>
                                                                    </div>
                                                                    <div className="det">
                                                                        <h3>Great Support</h3>
                                                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                                accusantium.
                                                            </p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="ico">
                                                                        <i className="icon-print-1"></i>
                                                                    </div>
                                                                    <div className="det">
                                                                        <h3>Print &amp; Branding</h3>
                                                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                                accusantium.
                                                            </p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="ico">
                                                                        <i className="icon-megaphone"></i>
                                                                    </div>
                                                                    <div className="det">
                                                                        <h3>Marketing</h3>
                                                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                                accusantium.
                                                            </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!-- END SKILLS -->*/}

                                        {/*<!-- START EXPERIENCE -->*/}
                                        <div className="resume-card">
                                            <div className="main-title">
                                                <h1>experience</h1>
                                                <hr />
                                            </div>
                                            <div className="content">
                                                <div className="block-content ">
                                                    <div className="timeline experience">
                                                        <div className="row ">
                                                            <div className="col-md-12">
                                                                <ul className="timeline">
                                                                    <li className="timeline-item">
                                                                        <div className="timeline-info">
                                                                            <span>March 12, 2016</span>
                                                                        </div>
                                                                        <div className="timeline-marker"></div>
                                                                        <div className="timeline-content">
                                                                            <h3 className="timeline-title">Event Title</h3>
                                                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan
                                                                    a, consectetuer eget, posuere ut, mauris. Donec orci
                                                                    lectus, aliquam ut, faucibus non, euismod id, nulla.
                                                                    Donec vitae sapien ut libero venenatis faucibus. ullam
                                                                    dictum felis eu pede mollis pretium. Pellentesque ut
                                                                    neque.
                                                                </p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!-- END EXPERIENCE -->*/}

                                        {/*<!-- START EDUCATION -->*/}
                                        <div className="resume-card">
                                            <div className="main-title">
                                                <h1>education</h1>
                                                <hr />
                                            </div>
                                            <div className="content">
                                                <div className="block-content">
                                                    <div className="timeline education">
                                                        <div className="row ">
                                                            <div className="col-md-12">
                                                                <ul className="timeline">
                                                                    <li className="timeline-item">
                                                                        <div className="timeline-info">
                                                                            <span>March 12, 2016</span>
                                                                        </div>
                                                                        <div className="timeline-marker"></div>
                                                                        <div className="timeline-content">
                                                                            <h3 className="timeline-title">Event Title</h3>
                                                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan
                                                                    a, consectetuer eget, posuere ut, mauris. Donec orci
                                                                    lectus, aliquam ut, faucibus non, euismod id, nulla.
                                                                    Donec vitae sapien ut libero venenatis faucibus. ullam
                                                                    dictum felis eu pede mollis pretium. Pellentesque ut
                                                                    neque.
                                                                </p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!-- END EDUCATION -->*/}

                                        {/*<!-- START PORTFOLIO -->*/}
                                        <div className="resume-card">
                                            <div className="main-title">
                                                <h1>my works</h1>
                                                <hr />
                                            </div>

                                            <div className="content">
                                                <div className="block-content ">
                                                    <div className="works">
                                                        <div className="row">
                                                            <ul className="work">
                                                                <li className="col-md-4 ">
                                                                    <div className="item web">
                                                                        <a href="project_single.html">
                                                                            <div className="desc">
                                                                                <h3 className="proj-desc">Project Name
                                                                        <hr />
                                                                                    <span>web design</span></h3>
                                                                            </div>
                                                                            <img alt="" src={placeHolder} />
                                                                        </a>
                                                                    </div>
                                                                </li>
                                                                <li className="col-md-4 ">
                                                                    <div className="item web">
                                                                        <a href="project_single.html">
                                                                            <div className="desc">
                                                                                <h3 className="proj-desc">Project Name
                                                                        <hr />
                                                                                    <span>web design</span></h3>
                                                                            </div>
                                                                            <img alt="" src={placeHolder} />
                                                                        </a>
                                                                    </div>
                                                                </li>
                                                                <li className="col-md-4 ">
                                                                    <div className="item web">
                                                                        <a href="project_single.html">
                                                                            <div className="desc">
                                                                                <h3 className="proj-desc">Project Name
                                                                        <hr />
                                                                                    <span>web design</span></h3>
                                                                            </div>
                                                                            <img alt="" src={placeHolder} />
                                                                        </a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!-- END PORTFOLIO -->*/}
                                    </div>
                                </section>
                            </div>
                            {/*<!-- END RESUME -->*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
