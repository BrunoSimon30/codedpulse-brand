import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Col, Row, Image } from "react-bootstrap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { gsap } from "@/helpers/gsap";
import ProjectModal from "./ProjectModal";
import { PortfolioAllProps, PortfolioDataProps } from "./types/portfolio";

const PortfolioAll: React.FC<PortfolioAllProps> = ({ category, data }) => {
  const [modalShow, setModalShow] = useState(false);
  const main = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [filteredData, setFilteredData] = useState<PortfolioDataProps[]>([]);
  const [currentProjectTitle, setCurrentProjectTitle] = useState<string>("");

  useEffect(() => {
    const newFilteredData =
      category === "all"
        ? data
        : data.filter((item) => item.label?.includes(category));
    setFilteredData(newFilteredData);
    setCurrentIndex(0);
  }, [category, data]);

  useEffect(() => {
    // console.log(filteredData);
  }, [filteredData]);

  useIsomorphicLayoutEffect(() => {
    if (!main.current) return;

    const ctx = gsap.context(() => {
      const mediaQuery = window.matchMedia("(min-width: 992px)");

      const handleResize = () => {
        if (mediaQuery.matches) {
          const pinItem = main.current?.querySelector(
            ".pin_item"
          ) as HTMLElement | null;
          // Execute GSAP animations if the viewport width is greater than 992px
          setTimeout(() => {
            if (pinItem) {
              gsap.killTweensOf(pinItem);
              gsap.set(pinItem, { clearProps: "all" });

              gsap.timeline({
                scrollTrigger: {
                  trigger: main.current,
                  pin: pinItem,
                  start: "top +100px",
                  // end: "bottom bottom",
                  end: () => {
                    return (
                      "+" +
                      //@ts-ignore
                      main.current?.querySelector(".right_scrolling_")
                        ?.clientHeight /
                        1.5 +
                      "px"
                    );
                  },
                },
              });
            }
          }, 40);
        } else {
          // Revert GSAP animations if the viewport width is less than 992px
        }
      };

      // Initial check
      handleResize();

      // Add event listener for window resize
      mediaQuery.addEventListener("change", handleResize);

      return () => {
        // Clean up event listener and GSAP context
        mediaQuery.removeEventListener("change", handleResize);
        ctx.revert();
      };
    }, main);
  }, []);
  // useIsomorphicLayoutEffect(() => {
  //   if (!main.current) return;

  //   const ctx = gsap.context(() => {
  //     const pinItem = main.current?.querySelector(".pin_item") as HTMLElement | null;

  //     if (pinItem) {
  //       gsap.killTweensOf(pinItem);
  //       gsap.set(pinItem, { clearProps: "all" });

  //       gsap.timeline({
  //         scrollTrigger: {
  //           trigger: main.current,
  //           pin: pinItem,
  //           start: "top +=100px",
  //           end: "bottom bottom",
  //         },
  //       });
  //     }
  //   }, main);

  //   return () => ctx.revert();
  // }, [filteredData]);

  return (
    <section ref={main}>
      <Row>
        <Col md="7" className="">
          {filteredData.length > 0 ? (
            <div className="ser-box">
              <div
                onClick={() => {
                  setModalShow(true);
                  setCurrentProjectTitle(filteredData[0].key!);
                  setCurrentIndex(0);
                }}
                className=""
              >
                <div className="video pin_item">
                  <video
                    key={filteredData[0].src}
                    src={filteredData[0].src}
                    poster={filteredData[0].poster}
                    autoPlay
                    muted
                    loop
                  ></video>
                </div>
                <div className="flex_between">
                  <div>
                    <p className="categ">{filteredData[0].label}</p>
                    <h3 className="title">{filteredData[0].title}</h3>
                  </div>
                  <Image src="/images/arrow.svg" className="arrow" alt="img" />
                </div>
              </div>
            </div>
          ) : (
            <div className="ser-box pin_item">
              <p>No items available for this category.</p>
            </div>
          )}
        </Col>
        <Col md="5" className="right_scrolling_">
          {filteredData.slice(1).map((item: any, index) => (
            <div
              className="ser-box"
              key={index}
              onClick={() => {
                setModalShow(true);
                setCurrentProjectTitle(item?.key);
                setCurrentIndex(index + 1);
              }}
            >
              <Link href="">
                <div className="video">
                  <video
                    src={item.src}
                    poster={item.poster}
                    autoPlay
                    muted
                    loop
                  ></video>
                </div>
                <div className="flex_between">
                  <div>
                    <p className="categ">{item.label}</p>
                    <h3 className="title">{item.title}</h3>
                  </div>
                  <Image src="/images/arrow.svg" className="arrow" alt="img" />
                </div>
              </Link>
            </div>
          ))}
        </Col>
      </Row>
      <ProjectModal
        show={modalShow}
        currentIndex={currentIndex}
        onHide={() => setModalShow(false)}
        data={filteredData}
        currentProjectTitle={currentProjectTitle}
      />
    </section>
  );
};

export default PortfolioAll;
