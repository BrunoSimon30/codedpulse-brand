import LottiePlayer from "@/components/LottiePlayer";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";



function ServiceList() {
  return (
    <>
      <div className="servwrap">
        <Row>
          <Col lg="6">
            <Link href={'/solutions/#appdesign'} className="inner" target="_blank">
              <Row >
                <Col xs="4" className="">
                  {/* <Image
                    src="/images/group13502.png"
                    className="img-fluid"
                    alt="img"
                  /> */}
                  <LottiePlayer
                    autoplay
                    className="blendmode service-lottifiles"
                    loop
                    src="/lottie/ball_balance.json"
                    style={{ height: "8vw", width: "8vw" }}
                  >
                  </LottiePlayer>
                </Col>
                <Col xs="8" className="align-self-center">
                  <h4 className="title">App design and development</h4>
                  {/* <p>Crafting apps that stand out from the crowd is our specialty. From concept to launch, we infuse creativity and functionality into every pixel and code line, ensuring your app makes a lasting impression on users. Let us bring your app vision to life, pixel by pixel, tap by tap.</p> */}
                </Col>
              </Row>
            </Link>
          </Col>
          <Col lg="6">
            <Link href={'/solutions/#aiml'} className="inner" target="_blank">
              <Row >
                <Col xs="4" className="">
                  {/* <Image
                    src="/images/group251.png"
                    className="img-fluid"
                    alt="img"
                  /> */}
                  <LottiePlayer
                    autoplay
                    loop
                    className="service-lottifiles"
                    src="/lottie/processing_loader1.json"
                    style={{ height: "12vw", width: "12vw" }}
                  >
                  </LottiePlayer>
                </Col>
                <Col xs="8" className="align-self-center">
                  <h4 className="title">AI/ML</h4>
                  {/* <p>Our AI and machine learning services help you make smart business choices so you always stay ahead with advanced analytics.</p> */}
                </Col>
              </Row>
            </Link>
          </Col>
          <Col lg="6">
            <Link href={'/solutions/#webdesign'} className="inner" target="_blank">
              <Row >
                <Col xs="4" className="">
                  {/* <Image
                    src="/images/group260.png"
                    className="img-fluid"
                    alt="img"
                  /> */}
                  <LottiePlayer
                    autoplay
                    className="service-lottifiles"
                    loop
                    src="/lottie/shapes_loader.json"
                    style={{ height: "8vw", width: "8vw" }}
                  >
                  </LottiePlayer>
                </Col>
                <Col xs="8" className="align-self-center">
                  <h4 className="title">Web design and development</h4>
                  {/* <p>Build stunning, user-friendly websites that capture your brand’s essence. Our team creates custom designs that engage and convert visitors.</p> */}
                </Col>
              </Row>
            </Link>
          </Col>
          <Col lg="6">
            <Link href={'/solutions/#digitalmart'} className="inner" target="_blank">
              <Row >
                <Col xs="4" className="">
                  {/* <Image
                    src="/images/group258.png"
                    className="img-fluid"
                    alt="img"
                  /> */}
                  <LottiePlayer
                    autoplay
                    className="service-lottifiles"
                    loop
                    src="/lottie/loading_shapes1.json"
                    style={{ height: "18vw", width: "18vw" }}
                  >
                  </LottiePlayer>
                </Col>
                <Col xs="8" className="align-self-center">
                  <h4 className="title">Digital marketing</h4>
                  {/* <p>Strengthen your digital footprint and connect with more clients using our effective digital marketing strategies. We tailor our approach to grow your brand and increase your ROI.</p> */}
                </Col>
              </Row>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ServiceList;
