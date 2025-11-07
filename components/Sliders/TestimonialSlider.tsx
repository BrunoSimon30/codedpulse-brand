import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Slider from "react-slick";
import testi1 from "@/public/images/testimonials-alli.png"
import testi2 from "@/public/images/talishabrantley.png"
import Image from "react-bootstrap/Image";
import { useEffect, useRef } from "react";

function TestimonialSlider() {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "-60px",
        variableWidth: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    };
    return (
        <>
            <div className="testi-slider">
                <Slider {...settings}>
                    <div className="col-lg-5">
                        <div className="card card-lg">
                            <div className="card-body">
                                <p>Working with Coded Pulse was a game-changer for our business! Their attention to detail and creativity brought our app vision to life in ways we never imagined. The team was responsive, professional, and genuinely passionate about delivering results. Highly recommend</p>
                                <div className="profile">
                                    <div>
                                        <h6 className="name">Sarah Johnson</h6>
                                        <p className="designation">CEO of Trendify</p>
                                    </div>
                                    <Image
                                        src="/images/placehlder131.png"
                                        className="testimg"
                                        alt="img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card card-lg">
                            <div className="card-body">
                                <p>Coded Pulse exceeded our expectations at every turn. From initial concept discussions to final delivery, they were with us every step of the way, offering valuable insights and guidance. Our app launch was a huge success, thanks to their expertise and dedication. </p>
                                <div className="profile">
                                    <div>
                                        <h6 className="name">Michael Chang</h6>
                                        <p className="designation">Co-Founder of FoodieFusion</p>
                                    </div>
                                    <Image
                                        src="/images/placehlder131.png"
                                        className="testimg"
                                        alt="img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card card-lg">
                            <div className="card-body">
                                <p>Choosing Coded Pulse was the best decision we made for our startup. They not only delivered a top-notch app but also provided ongoing support and maintenance to ensure its continued success. Their commitment to quality and customer satisfaction is unmatched.</p>
                                <div className="profile">
                                    <div>
                                        <h6 className="name">Emily Nguyen</h6>
                                        <p className="designation">CTO of HealthHub</p>
                                    </div>
                                    <Image
                                        src="/images/placehlder131.png"
                                        className="testimg"
                                        alt="img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card card-lg">
                            <div className="card-body">
                                <p>I can’t say enough good things about Coded Pulse. Their team’s creativity, technical expertise, and collaborative approach made the app development process smooth and enjoyable. We’re thrilled with the final product and look forward to working with them again in the future.</p>
                                <div className="profile">
                                    <div>
                                        <h6 className="name">David Smith</h6>
                                        <p className="designation">Founder of Wanderlust Adventures</p>
                                    </div>
                                    <Image
                                        src="/images/placehlder131.png"
                                        className="testimg"
                                        alt="img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card card-lg">
                            <div className="card-body">
                                <p>Coded Pulse truly understands the importance of user experience and functionality. They took the time to understand our business goals and tailored their solutions to meet our specific needs. The result? An app that not only looks great but also drives tangible results for our organization.</p>
                                <div className="profile">
                                    <div>
                                        <h6 className="name">Amanda Rodriguez,</h6>
                                        <p className="designation">Marketing Director of Lifestyle Fitness</p>
                                    </div>
                                    <Image
                                        src="/images/placehlder131.png"
                                        className="testimg"
                                        alt="img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default TestimonialSlider;