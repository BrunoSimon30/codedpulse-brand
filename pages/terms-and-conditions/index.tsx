import Head from "next/head";
import Image from 'react-bootstrap/Image';
import React from "react";
import Header from "@/components/Header/Header";
import { Button, Card, Col, Container, FloatingLabel, Form, Nav, Row, Tab } from "react-bootstrap";
import Footer from "@/components/Footer/Footer";
import TestimonialSlider from "@/components/Sliders/TestimonialSlider";
import Link from "next/link";
import MagnetButton from "@/components/MagnetButton";

export default function TermsConditions() {

  return (
    <>
      <Head>
        <title>Terms & Conditions</title>
      </Head>
      <div>
        <section className="hero-section pb-0 text-center">
          <Container>
            <h4 className="heading">Terms & Conditions</h4>
          </Container>
        </section>


        <section className="section-padding policy-sec">
          <Container>
            <h4 className="title">Effective Date: 21-June-2024</h4>
            <p className="para">The Terms and Conditions (“TERMS”) of Coded Pulse website guide users on how to access and use it and its services. Coded Pulse permits users to view, access, and use the Website and Content in accordance with this TERMS, and if the user does not agree to any part of this TERMS, they are advised not to access or use the Website or its Content. Using our service(s) will be subject to a contractual agreement made between Coded Pulse and the user. Here, “we,” “us,” “our,” “website,” and “company” refer to Coded Pulse, “you” and “your” refer to Users, and “Terms” refer to Terms and Conditions.  </p>
            <h4 className="title">Ownership and Restrictions</h4>
            <p className="para">Coded Pulse owns and operates its Website, including logos, continent, images, videos, and all those affiliated with it as its intellectual properties and copyright and intellectual property laws protect them. You are not allowed to:</p>
            <ul>
              <li>Sell, rent, trade, sublicense, redistribute, lease, delegate, share, or commercially misuse the Website and its Content;</li>
              <li>Make the Website and its Content available to any third party;</li>
              <li>Use the Website and its Content illegally or to distort its credibility or performance, including but not limited to:</li>
              <li>Making any wrong or deceptive reservation to make false claims or demands; </li>
              <li>Practicing or taking any action that creates problems for our website infrastructure;</li>
              <li>Link into any part of this Website without having sought our approval first;</li>
              <li>Copying, viewing, or tracking any part of the Website or any Content using any manual method or automated software; </li>
              <li>Copying or reproducing the Website’s layout, any Content, or intellectual properties, to acquire details through any methods not made accessible via the Website itself;</li>
              <li>Edit or hack the Website and its content to get unauthorized access and any records inaccessible to the general public. You are not allowed to change, modify, recover, make publicly available, profit from, copy, distribute, or create new works based on the Website and Content, except for downloading and printing a version of materials available to the public. If we notice these activities, we have the right to take legal action as a preventive measure.</li>
            </ul>
            <h4 className="title">Responsibility for Your Information</h4>
            <p className="para">You are fully responsible for any content you upload, publish, or provide on the Website until the official period of your contract defining the Company&apos;s obligations.</p>
            <h4 className="title">Confidentiality</h4>
            <p className="para">Any information shared between the User and Coded Pulse, revealed by the User to Coded Pulse, or Vice Versa, including pricing information, will be considered proprietary and should not be disclosed to third parties unless it is publicly available.</p>
            <h4 className="title">Company Rights</h4>
            <p className="para">Coded Pulse and its licensors will each maintain ownership of their rights to logos, brand names, trademarks, copyrights, patents, and applications used on the Website. According to these terms and conditions, the Company does not grant you any rights.</p>
            <h4 className="title">Use of Intellectual Property</h4>
            <p className="para">By sharing your information on the website, you give the Company permission to utilize the User Information solely to offer you website services. The Company only shares the User Content with third parties necessary to offer you website services seamlessly and does not sell it. The User takes no responsibility for User Content and agrees that User Content does not infringe our and any third party&apos;s rights.</p>
            <h4 className="title">Feedback</h4>
            <p className="para">You have the option to leave feedback on the website, products, or services. You acknowledge and agree that:</p>
            <ul>
              <li>The feedback is given willingly, and the Company has the right to use and benefit from it without limitations. </li>
              <li>You will not receive any reimbursement or recognition for your Feedback.</li>
              <li>Your Feedback is not considered confidential information for you or any third party.</li>
            </ul>
            <h4 className="title">Warranty</h4>
            <p className="para">You guarantee that your actions on the website and the Company&qout;s use of User Content will not violate any third party&qout;s legal rights, such as copyright, trademark, or privacy, and will not contain defamatory, pornographic, illegal, disrespectful, violent, or offensive material.</p>
            <h4 className="title">Trademarks</h4>
            <p className="para">Trademarks, graphics, and logos associated with this website are registered trademarks of Coded Pulse or its affiliates. All trademarks seen on the Website belong to their respective owners. Our trademarks must not be utilized for any reason without our specific written approval. You authorize Coded Pulse to conduct necessary inquiries to confirm your identity, email, or financial tools. Not providing requested information about oneself is a breach of this agreement.</p>
            <h4 className="title">Promotional Offers and Discounts</h4>
            <p className="para">The company has an exclusive feature of offering promotions, discounts, and pricing to customers based on a fair usage policy.</p>
            <h4 className="title">No Warranty Policy</h4>
            <p className="para">The Website, content, server, and network components are provided without guaranteed warranties. You acknowledge that there is no guarantee from the company that your access to the Website will be continuous, immediate, secure, flawless, or free of viruses. Any information or services obtained from the Website do not come with any guarantees outlined in these Terms. The Company may do either of the following without giving prior notice:</p>
            <ul>
              <li>Cancel, suspend, or terminate access.</li>
              <li>Modify, amend, or adjust.</li>
              <li>Interrupt the website’s operation or any part for any purpose required for maintenance, error correction, or other modification.</li>
            </ul>
            <h4 className="title">Limited Liability</h4>
            <p className="para">You can access and use the Website and the Content at no cost, as long as you abide by these Terms. You agree that the company is not liable for any incidental, consequential, indirect, extraordinary, punitive, or exemplary damages that could happen. Some states and jurisdictions do not permit the exclusion of limited liabilities related to incidental or consequential damages. In these cases, the company&qout;s responsibility will be limited to the most allowed by the state.</p>
            <h4 className="title">Dispute Resolution</h4>
            <p className="para">These Terms are created in accordance with the laws of the jurisdiction without any possibility of conflicting laws. In any legal action involving the parties, each party agrees unconditionally and permanently to adhere to exclusive jurisdiction. Any modifications to the Privacy Policy by the Company will be included in these Terms, forming a complete agreement between the parties regarding accessing parts of the Website without an account ID or password. Access to password-protected sections of the Website may require extra agreements.</p>
            <h4 className="title">Entire Agreement</h4>
            <p className="para">All legal documents on the Website, including the Terms and the Privacy Policy, form a complete agreement between you and the Website, replacing any previous agreements regarding the topic and only changeable by the Company as specified.</p>
            <h4 className="title">Our Design Rights</h4>
            <p className="para">Once the company acquires the design rights, you acknowledge that you will not be permitted to use any response, content, work product, or media, nor will you have any ownership stake in them. Coded Pulse collaborates with Government Copyright Agencies to provide Copyright Acquisition information for refunded designs, preventing the designs from being reused as original designs in the future. If you have any inquiries or issues regarding our Refund Policy, please reach out to us.</p>
            <h4 className="title">Refund Policy</h4>
            <p className="para">The refund policy will be nullified if,</p>
            <ul>
              <li>An offer for a reduced price has been selected.</li>
              <li>The initial design idea has been given the green light.</li>
              <li>You have requested for changes.</li>
              <li>Design project orders placed on an urgent basis are not subject to refunds.</li>
              <li>The order cancellation was caused by reasons unrelated to the company.</li>
              <li>The client has been unresponsive or unreachable for over 2 weeks during the project.</li>
              <li>The company&apos;s policies have been breached.</li>
              <li>Another company or designer was contacted for the project.</li>
              <li>The creative brief does not include the necessary information.</li>
              <li>A total redesign is a new requirement.</li>
            </ul>
            <p className="para">For a refund request, you can email us at <a href="mailto:Letstalk@codedpulse.co">Letstalk@codedpulse.co</a>. The billing department will contact you promptly upon receiving the request. Once the necessary analysis is finished, the refund process will begin.</p>
            <h4 className="title">Modifications and Updates to Terms</h4>
            <p className="para">Coded Pulse has the right to change Terms of Conditions at any moment. The Company will notify you by posting updated Terms on this website. It is your responsibility to verify the date of the &qout;Last Update&qout;. Your agreement to be bound by any update will be indicated by your continued use of the Website after such update.</p>
            <h4 className="title">Contact Us</h4>
            <p className="para">Our customer support team is always available to address your questions or concerns about these Terms. Contact us at <a href="mailto:Letstalk@codedpulse.co">Letstalk@codedpulse.co</a> or <a href="tel:+18557256835">(855) 725-6835</a>.</p>
            <p className="para"><b>Note</b>: Coded Pulse reserves all rights to approve or refuse any project or terminate the contract as deemed essential. Following the refund/dispute, you will not be able to use the designs for any reason, as they will become our exclusive property. The Company will possess complete ownership of the designs.</p>

          </Container>
        </section>
      </div >
    </>
  );
}
