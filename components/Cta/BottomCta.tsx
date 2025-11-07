import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import React, { useState, ChangeEvent, FormEvent } from "react";
import MagnetButton from "../MagnetButton";


function BottomCta() {


  return (
    <>
      <section className="section-padding bg-purple bottomcta">
        <Container>
          <div className="text-center minuslr">
            <h2 className="mheading mb-0">Discover the future of  <span className="highlight">App Design & Development</span></h2>
            <h2 className="mheading">It’s worth the experiment! Trust us to be your wild card in a sea of average players. Get ready to make your brand the star of the digital show!</h2>
          </div>
        </Container>
      </section>
    </>
  );
}

export default BottomCta;
