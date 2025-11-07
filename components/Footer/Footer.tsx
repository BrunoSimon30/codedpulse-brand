/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "@/public/imgs/logo.svg";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="footer">
        <Container>

          <Row>
            <Col lg="5" className="pe-lg-5">
              <Link href={"/"}><img src={"/images/logo.svg"} className="logo" alt="" /></Link>
              <p className="f-para mb-4">From the initial pitch to the final Coded Pulse, we tailor apps that truly enrich. Connect with us today and witness your app functioning without a glitch!</p>
              <p className="f-para fw-bold">Payment partners with Crafted Motions</p>
              <div className="social">
                <Link href={"#"}><i className="icon-Socials-1"></i></Link>
                <Link href={"#"}><i className="icon-Socials-3"></i></Link>
                {/* <Link href={"/"}><i className="icon-Socials-5"></i></Link>
                <Link href={"/"}><i className="icon-Socials"></i></Link>
                <Link href={"/"}><i className="icon-Socials-4"></i></Link>
                <Link href={"/"}><i className="icon-Socials-2"></i></Link> */}
              </div>
            </Col>
            <Col lg="3" xs="6">
              <div className="info">
                <h4 className="title">Quick links</h4>
                <Link href={"/"} className="">Home</Link>
                <Link href={"/about-us"} className="">About</Link>
                <Link href={"/solutions"} className="">Solutions</Link>
                <Link href={"/projects"} className="">Projects</Link>
                {/* <Link href={"/insights"} className="">Insights</Link> */}
                <Link href={"/contact-us"} className="">Connect</Link>
              </div>
            </Col>
            <Col lg="4" xs="6">
              <div className="info">
                <h4 className="title">Contact</h4>
                <Link href={"tel:+18557256835"} className="mb-lg-4 contact">
                  <i className="icon-Vector-28"></i>
                  <div>
                    <p>Let&apos;s Discuss!</p>
                    <h4>(855) 725-6835</h4>
                  </div>
                </Link>
                <Link href={"#"} className="contact">
                  <i className="icon-Vector-29"></i>
                  <p>222 South Main Street, Suite 500 Salt Lake City, UT 84101, USA</p>
                </Link>
                {/* <Link href={"#"} target="_blank" className="contact">
                  <img src={"/images/trustpilot.png"} className="trust" alt="" />
                </Link> */}

              </div>
            </Col>
          </Row>

          <div className="footer-copyright">
            <Row>
              <Col className="mb-lg-0 mb-2 text-lg-start text-center" lg="6">
                <p>© 2025 <b>Coded Pulse</b> — A subsidiary of <a href="https://visualqube.com/" target="_blank"><b> VisualQube</b></a> . All rights reserved.</p>
              </Col>
              <Col className="text-lg-end text-center" lg="6">
                <Link href={"/privacy-policy"} className="me-2">Privacy Policy  | </Link>
                <Link href={"/terms-and-conditions"}>Terms & Conditions</Link>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
