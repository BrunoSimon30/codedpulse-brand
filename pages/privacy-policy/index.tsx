import Head from "next/head";
import Image from 'react-bootstrap/Image';
import React from "react";
import Header from "@/components/Header/Header";
import { Button, Card, Col, Container, FloatingLabel, Form, Nav, Row, Tab } from "react-bootstrap";
import Footer from "@/components/Footer/Footer";
import TestimonialSlider from "@/components/Sliders/TestimonialSlider";
import Link from "next/link";
import MagnetButton from "@/components/MagnetButton";

export default function PrivacyPolicy() {

  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <div>
        <section className="hero-section pb-0 text-center">
          <Container>
            <h4 className="heading">Privacy Policy</h4>
          </Container>
        </section>


        <section className="section-padding policy-sec">
          <Container>
            <h4 className="title">Effective Date: 21-June-2024</h4>
            <p className="para">Coded Pulse is a responsible digital platform that understands and values users’ privacy by protecting the personal information they provide us through the website <a href="https://codedpulse.co/">codedpulse.co</a>. This information becomes accessible to Coded Pulse when visitors visit, access, or use the website.</p>
            <p className="para">The main objective of this Privacy Policy is to clearly define what information we collect, its nature, purpose of collection, and the rights of Coded Pulse and website users to the information collected. A user’s access to this website will imply that he/she agrees to how and what collect and how and when we use those details.</p>
            <p className="para">Here, “we,” “us,” “our,” “website,” and “company” refer to Coded Pulse, “you” and ““your” refer to Users, and “Privacy Policy” refer to Privacy Policy.    </p>
            <h4 className="title">Terms and Conditions</h4>
            <p className="para">This Privacy Policy is an integral part of Terms (Terms and Conditions) that you accept and agree to when accessing and using the Website.</p>
            <h4 className="title">Age Limitation</h4>
            <p className="para">Coded Pulse only entertains users who are above the age of 18 years. If people under 18 come across Coded Pulse, the company will immediately exclude them from the website without warning.</p>
            <h4 className="title">Data Management & Protection Policy</h4>
            <p className="para">When we collect or utilize your data, we are required to implement fair measures to ensure its protection in compliance with the General Data Protection Regulation (GDPR). Our policy on data management involves the process of examining, storing, limiting, or regulating access to data within our authority. If your Personal Information is breached, we will adhere to the escalation matrix.</p>
            <h4 className="title">Personal Information</h4>
            <p className="para">You can access the Website or use any services available by providing us with personal information for identification purposes. Your consent is required for any information to be collected. The objectives of the compilation are:</p>
            <ul>
              <li>To search for and assess information and reviews about our services;</li>
              <li>To identify and resolve technical issues associated with our Services;</li>
              <li>To evaluate the traffic related to how customers utilize our Services.</li>
              <li>To enhance services offered by external parties, like third-party services connected to our website.</li>
            </ul>
            <p className="para">The Personal Information may include, but is not limited to:</p>
            <ul>
              <li>Name or identity</li>
              <li>Contact information </li>
              <li>Credit card details</li>
              <li>Bank account information, etc.</li>
            </ul>
            <h4 className="title">Non-Personal Information</h4>
            <p className="para">Upon entering the website, specific non-personal, technical data will be collected automatically without your consent, including:</p>
            <ul>
              <li>Device type</li>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Website pages visited</li>
            </ul>
            <p className="para">We use this data to analyze our website traffic. The technical data does not require you to be identifiable, i.e., we use &qoout;cookies&qoout; with just limited information.</p>
            <h4 className="title">Cookies Policy</h4>
            <p className="para">A cookie is a text file of a small size from a website stored within a web browser you use, and the Website (like ours) can be retrieved later. The purposes of using cookies are:</p>
            <p className="para">To communicate to the server that users have revisited a specific webpage. This way, we can improve the Website, monitor user behavior, personalize your user experience, and keep your management of cookies through your browser settings convenient. Although you can disable cookies, disabling them can limit your user experience.</p>
            <h4 className="title">Data Safety Measures</h4>
            <p className="para">We acknowledge your privacy rights. Therefore, we do not disclose your name and contact information to any outside parties. Additionally, we ensure that any information you provide is kept confidential. The data you give is utilized solely for grasping your needs and enhancing our services to better cater to you quite effectively. We make sure to adhere to the guidelines established by Payment Card Industry Data Security Standard (PCI DSS) and safeguard consumer data.</p>
            <p className="para">Our company states that its representatives are not allowed to gather confidential information such as credit card details from customers. Therefore, we recommend that customers refrain from disclosing any sensitive information to our employees. Doing so will be at your own risk, and our company will not be responsible for any misuse. If a staff member asks you for your credit card information, please make sure to report it to the email address provided on our website.</p>
            <p className="para">Your requested task could be sent to any of our worldwide production and service facilities for efficient delivery. Nonetheless, they are also obligated by a non-disclosure agreement to maintain the strict confidentiality of customer&apos;s information.</p>
            <h4 className="title">Data Sharing</h4>
            <p className="para">We don&apos;t share, lease, or disclose any of the information we collect, store, and protect to third parties, except when we may share it with others as outlined below:</p>
            <ul>
              <li>Third-party Service Providers: We have agreements with many partner service providers to support the functioning of the Website, with whom we can exchange collected information.</li>
              <li>Legal Requirements: We may disclose information to law enforcement or in reply to legal demands.</li>
              <li>Analysis: Non-personal, technical information can be shared with third parties for marketing or promotional reasons and not for personal benefit.</li>
              <li>Financial Transactions: If Coded Pulse undergoes a merger, acquisition, or bankruptcy, information collected may be transferred to a different entity.</li>
            </ul>
            <h4 className="title">Third-Party Links</h4>
            <p className="para">The website might have links to other pages from third parties. We are not liable for gathering, utilizing, and spreading data or the privacy protocols of said websites.</p>
            <h4 className="title">Global Data Transfer</h4>
            <p className="para">The data might be sent to and saved on servers in a different jurisdiction, where privacy laws may vary. By agreeing to this Privacy Policy, you also agree to any transfer of your information.</p>
            <h4 className="title">Changes to Privacy Policy</h4>
            <p className="para">Coded Pulse has the right to change this Privacy Policy at any time. The Company will notify you by posting an updated policy on the Website. It is your responsibility to verify the date of the &qout;Last Update&qout;. Your agreement to be bound by any update will be indicated by your continued use of the Website after such update.</p>
            <h4 className="title">Contact Us</h4>
            <p className="para">Our customer support team is always available to address your questions or concerns about this Privacy Policy. Contact us at <a href="mailto:Letstalk@codedpulse.co">Letstalk@codedpulse.co</a> or <a href="tel:+18557256835">(855) 725-6835</a>.</p>
          </Container>
        </section>
      </div >
    </>
  );
}
