/* eslint-disable @next/next/no-img-element */
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import React, { useState, ChangeEvent, FormEvent } from "react";
import MagnetButton from "../MagnetButton";


function NewsSec() {


  return (
    <>
      <section className="section-padding pb-0 news-sec">
          <Container>
            <Row>
              <Col lg="5">
                <h4 className="mheading">Our <br /> newsletter</h4>
              </Col>
              <Col lg="7">
                <div className="inputwrap">
                  <input type="email" name="" id="" placeholder="Your email" />
                  <img src="/images/arrow2.png" alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    </>
  );
}

export default NewsSec;
