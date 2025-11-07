import React, { createElement, useEffect, useMemo } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import { ProjectModalProps } from "./types/portfolio";
import styles from "./index.module.scss";
import { ProjectsData } from "@/utils";
import { useMediaQuery } from 'react-responsive'
import Link from "next/link"



const ProjectModal: React.FC<ProjectModalProps> = ({
  show,
  onHide,
  currentIndex,
  currentProjectTitle,
  data,
}) => {
  const currentItem = data[currentIndex];

  const currentProject = useMemo(() => {
    console.log(currentProjectTitle);
    return ProjectsData.find((item) => item.title === currentProjectTitle);
  }, [currentProjectTitle]);



  const isMobile = useMediaQuery({ query: '(min-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 992px)' });







  return (
    <Modal
      className="project-modal lenis "
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered={isMobile && true}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body
        className={`overflow-hidden ${styles.modalBody}`}
        style={{
          backgroundColor: currentProject?.backgroundColor,

          position: 'relative'
        }}
      >

        <div className={`${styles.backgroundImage}`} style={{
          backgroundImage: `url(${currentProject?.bgBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: currentProject?.title === 'sands-rental' ? 1 : 0.03
        }}></div>
        {/* {currentItem ? (
          <div className="ser-box">
            <Row>
              <Col sm={7}>
                <div className="video">
                  <video
                    src={currentItem.src}
                    poster={currentItem.poster}
                    autoPlay
                    muted
                    loop
                    className="portvideo"
                  ></video>
                </div>
              </Col>
              <Col sm={5}>
                <Image
                  src={currentItem.poster}
                  className="portimg"
                  alt="img"
                />
              </Col>
            </Row>
            <div>
              <p className="categ">{currentItem.label}</p>
              <h3 className="title">{currentItem.title}</h3>
              <p className="para">
                {currentItem.description}
              </p>
            </div>
          </div>
        ) : (
          <div className="ser-box">
            <p>No data available for this item.</p>
          </div>
        )} */}
        <div className={`${styles.portfolioModalNew} ${isTablet && 'd-flex justify-content-center align-items-center'}  ${currentProject?.title}`}>

          <div className="px-sm-5 py-xxl-2">

            <Row className="">

              <Col lg={7}>
                <div className="d-flex flex-column  justify-content-start align-items-start">
                  <img src={currentProject?.logo} alt="" className={`${styles.projectLogo} img-fluid`} />
                  <h3 className={`mb-0  ms-2 fw-bolder  mt-xxl-3 ${styles.projectTitle}`}>
                    {currentProject?.ProjectTitle}
                  </h3>
                </div>
                <div className={`${styles.modalContainer}  portfolio-models`}>

                  <p className={`mt-xxl-5 mt-3 ${styles.projectDescription}`}>
                    {currentProject?.projectDescription}
                  </p>
                  <div className="mt-xxl-5 d-flex  justify-content-start align-items-center gap-sm-5 gap-4">
                    {currentProject?.projectsUtilData?.map((projectUtil, index) => {
                      return (
                        <div className="d-flex flex-column justify-content-start align-items-start">
                          <h5 className={`${styles.projectHeading}`}>{projectUtil?.heading}</h5>
                          <h6 className={`${styles.projectDescriptionUtil}`}>{projectUtil?.description}</h6>
                        </div>
                      );
                    })}
                  </div>

                  <div className="d-flex gap-3  sands-rental mt-sm-5 mt-2 justify-content-start align-items-center">
                    <Link href={currentProject?.viewCaseStudyLink || ''} className="btn-1 px-sm-5  ">View Case Study</Link>
                    <Link href={currentProject?.downloadLink || ''} download={true} target="_blank" className="btn-2 px-sm-5  " >Download Case Study</Link>
                  </div>

                  {
                    currentProject?.isMobileApp && (
                      <>
                        <div className="mt-sm-5 case-studies-app-icon">
                          {
                            currentProject?.title === 'sands-rental' ?
                              <>
                                <img src="/images/icons/case-studies-dark.svg" alt="" />
                              </>
                              :
                              <>
                                <img src="/images/icons/caser-studies-icon.svg" alt="" />
                              </>
                          }
                        </div>
                      </>
                    )
                  }


                </div>
              </Col>
              <Col lg={5} className="float-end d-flex justify-content-center align-items-center">
                <img src={currentProject?.projectImage} alt="" className={`img-fluid right-image ${styles.projectImage} ${currentProject?.title}-image`} />


              </Col>

            </Row>
          </div>
        </div>
        <div>

        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;
