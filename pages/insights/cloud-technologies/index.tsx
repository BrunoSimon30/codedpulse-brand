import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { gsap } from "@/helpers/gsap";
import { Button, Card, Col, Container, FloatingLabel, Form, Nav, Row, Tab } from "react-bootstrap";


export default function InsightsPages() {
  const sideListRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const blogImgRefs = useRef<HTMLImageElement[]>([]);
  const firstChildRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blogWrap2 = document.querySelector('.blog_wrap') as HTMLElement;

    if (blogWrap2) {
      window.addEventListener('scroll', () => {
        const rect = blogWrap2.getBoundingClientRect();

        if (rect.top <= 0 && rect.bottom > 2000) {
          blogWrap2.classList.add('active');
        } else {
          blogWrap2.classList.remove('active');
        }
      });
    }

    const sections = gsap.utils.toArray(".list_content") as HTMLElement[];
    const links = gsap.utils.toArray(".side_list li") as HTMLElement[];
    sections.forEach((section, i) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveLink(i),
          onEnterBack: () => setActiveLink(i),
        },
      });
    });
    function setActiveLink(index: number) {
      links.forEach((link, i) => {
        if (i === index) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
     // Scroll to corresponding section when list item is clicked
     links.forEach((link, i) => {
      link.addEventListener("click", () => {
        const section = sections[i];
        gsap.to(window, {
            scrollTo: {
              y: section,
              offsetY: 100,
            },
            duration: 1,
            ease: "power2.inOut",
        });
      });
    });
    const sideListTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current!,
        start: "top +=200px",
        end: "bottom bottom",
        pin: sideListRef.current!,
        pinSpacing: false,
        scrub: true,
        markers: false,
        // onUpdate: (self) => {
        //   const progress = self.progress;
        //   const topValue = 100 + progress * 100;
        //   gsap.set(sideListRef.current, { top: `${topValue}px` });
        // },
      },
    });

    blogImgRefs.current.forEach((imgRef) => {
      if (imgRef) {
        gsap.timeline({
          scrollTrigger: {
            trigger: imgRef,
            toggleClass: { targets: sideListRef.current, className: "hidelist" },
            start: "top +=60%",
            end: "bottom +=180px"
            // end: "bottom bottom",
            // onEnter: () => {
            //   gsap.to(sideListRef.current, {
            //     y: "-100%",
            //     duration: 0.5,
            //     ease: "power1.out",
            //   });
            // },
            // onLeave: () => {
            //   gsap.to(sideListRef.current, {
            //     y: "0",
            //     duration: 0.5,
            //     ease: "power1.in",
            //   });
            // },
            // onEnterBack: () => {
            //   gsap.to(sideListRef.current, {
            //     y: "100%",
            //     duration: 0.5,
            //     ease: "power1.out",
            //   });
            // },
            // onLeaveBack: () => {
            //   gsap.to(sideListRef.current, {
            //     y: "0",
            //     duration: 0.5,
            //     ease: "power1.in",
            //   });
            // },
          },
        });
      }
    });

    gsap.to(firstChildRef.current, {
      scrollTrigger: {
        trigger: firstChildRef.current!,
        start: "top top",
        toggleClass: { targets: firstChildRef.current, className: "add-top" },
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <Head>
        <title>Cost-effective b2b android app scaling with cloud technologies</title>
      </Head>
      <div>
        <section className="hero-section pb-0 text-center">
          <Container>
            <h4 className="heading hero-big">Cost-effective B2B android app scaling with cloud technologies</h4>
          </Container>
        </section>

        <section className="section-padding pt-0 blog_wrap">
          <Container ref={containerRef}>
            <div className="side_list" ref={sideListRef}>
              <ul>
                <li>Understanding BaaS and Cloud Application</li>
                <li>Two Main Roles</li>
                <li>The Best BaaS Service Providers</li>
                <li>Cloud Hosting Services for Ready-Made<br className="d-lg-block d-none" /> Backends</li>
                <li>BaaS: Cost-Effective Backend Management</li>
                <li>Kinvey</li>
                <li>Kii</li>
                <li>AnyPresence</li>
                <li>Appcelerator</li>
                <li>Kumulos</li>
                <li>Advantages of BaaS for Cloud-Based<br className="d-lg-block d-none" /> Android Development</li>
                <li>Wrap up</li>
              </ul>
            </div>
            <div className="right_half">
              <img src="/images/blogs/cloud-technologies/13.jpg" className="blog_img" alt="" />
              <div className="first_msg">
                <p className="para mb-3">Application scaling means the growth of mobile applications. Growth can be in terms of the app traffic to meet the business need. The app scalability is the pressing need of any successful business to have positive growth. Today, Android apps scalability without breaking the bank by using cloud services goes hand in hand. Although many cloud technologies are available for scaling B2B Android apps, this blog focuses on BaaS and its benefits, which are common across most cloud services.</p>
                <p className="para">Creating mobile application backends using services like BaaS (Backend As a Service) has become more and more popular. Leveraging BaaS allows businesses to scale their B2B Android Apps efficiently without spending a lot of money or resources. In such circumstances, there is a reasonable question. What are the tasks of this type of mobile backend development and why it is becoming the latest trend when coming to scaling the B2B Android apps. To find the answers, we will try to decipher this phenomenon in this post. Keep reading to know how businesses can create and scale their Android apps without breaking the bank by using cloud services, especially BaaS.</p>
              </div>

              <div className="list_content">
                <h4 className="title">1. Understanding BaaS and cloud application</h4>
                <img src="/images/blogs/cloud-technologies/1.jpg" className="blog_img" alt="" />
                <p className="para">Today, most mobile apps require a backend, capable of performing the maximum number of tasks, but using a minimum number of services. Cloud services are best for managing backend operations of B2B Android apps because they reduce the infrastructure costs.</p>
                <p className="para">Cloud-based BaaS stands for Backend as a Service. It was created in order to reduce the time of working with the backend of mobile applications, minimizing the cost of development, infrastructure management, and maintenance. Therefore, it enables developers to focus well on creating and enhancing the front-end and user experience. Typically, when using these services, you have a set of APIs (Application Programming Interface) and SDK (Software Development Kit) ready to use. </p>
              </div>
              <div className="list_content">
                <h4 className="title">2. Two main roles</h4>
                <p className="para">In the BaaS model, there are generally two main roles – the first one is BaaS User and the second is BaaS Provider. </p>
                <p className="para">The first role indicates the developers or organizations that build applications using the BaaS. By leveraging the BaaS services, they simplify backend operations for mobile, web, and other applications. </p>
                <p className="para">The second role refers to the company or platform that serves end-users by providing the backend infrastructure, APIs, and services. They take the responsibility of managing the backend operations complexity, and allow developers to concentrate more on the app’s frontend and business logic. Although this role is generally for “very high volume” applications, it applies broadly to all scalable cloud-based applications.</p>
                <p className="para">The basic backend feature set includes push notifications, online storage, integration with social networks, user administration, and more. Each of them has its own API, which must be implemented in an Android application. Building cloud applications greatly simplifies the process. For B2B businesses, developers can significantly reduce both development time and operational costs by choosing the right BaaS provider.</p>
                <p className="para">Look at the following table that helps you know how traditional backend methods, such as on-premises servers, dedicated hosting, or Virtual Private Servers (VPS) are less effective than BaaS:</p>
                <img src="/images/blogs/cloud-technologies/2.png" className="blog_img" alt="" />
              </div>
            </div>
            <img src="/images/blogs/cloud-technologies/big/2.webp" className="blog_img" alt=""
              ref={(el) => {
                if (el && !blogImgRefs.current.includes(el)) {
                  blogImgRefs.current.push(el);
                }
              }}
            />
            <div className="right_half">
              <div className="list_content">
                <h4 className="title">3. The best BaaS service providers</h4>
                <img src="/images/blogs/cloud-technologies/3.jpg" className="blog_img" alt="" />
                <p className="para">When you need to develop a B2B Android app with the backend in the cloud, the first step is to choose the service with which you will implement the idea and ensure it supports scalable app development without incurring high costs. In this case, you have two options.</p>
              </div>
              <div className="list_content">
                <h4 className="title">4. Cloud hosting services for ready-made backends</h4>
                <img src="/images/blogs/cloud-technologies/4.jpg" className="blog_img" alt="" />
                <p className="para">First, you can choose a service that will host the ready-made backend on the cloud. Among such services are Amazon Web Services, Heroku, and others. In this case, the server code is created by a developer and hosted by one of the cloud services.</p>
              </div>
              <div className="list_content">
                <h4 className="title">5. BaaS: cost-effective backend management</h4>
                <img src="/images/blogs/cloud-technologies/5.jpg" className="blog_img" alt="" />
                <p className="para">Second, you can choose cloud technologies like BaaS services. With the use of these services, developers have a set of tools with which they create a backend. This is precisely how the development time of mobile applications is reduced. The best aspect is that these services also reduce infrastructure costs because no investment is required to maintain backend infrastructure, servers, or databases, as these are managed by the BaaS provider. With BaaS solutions, you will have cost-effective approaches to manage backend infrastructure, making scaling economically viable.</p>
                <p className="para">Each of these services offers a very diverse set of tools for building the backend and scaling the B2B Android app.</p>
                <p className="para">In this part, we have some providers operating directly in the cloud. We have identified the most popular ones for you:</p>
              </div>
            </div>
            <img src="/images/blogs/cloud-technologies/big/2.webp" className="blog_img" alt=""
              ref={(el) => {
                if (el && !blogImgRefs.current.includes(el)) {
                  blogImgRefs.current.push(el);
                }
              }}
            />
            <div className="right_half">
              <div className="list_content">
                <h4 className="title">6. Kinvey</h4>
                <img src="/images/blogs/cloud-technologies/6.png" className="blog_img" alt="" />
                <p className="para">Kinvey is a cloud application platform that offers the fastest speed to complete the task. It is among the most popular and developed platforms for B2B Android apps. In the free version, you can serve up to 200 active users. To increase this number, you will need to purchase the paid version. It is known for its robust features, scalability, and low cost, making it a go-to choice for most businesses looking to scale their business apps.</p>
              </div>
              <div className="list_content">
                <h4 className="title">7. Kii</h4>
                <img src="/images/blogs/cloud-technologies/7.png" className="blog_img" alt="" />
                <p className="para">Kii is one of the cloud application development services that provides the fastest type of development at the lowest price. A strong focus is placed on IoT (Internet of Things) development. Leveraging this platform enables businesses to scale their Android apps efficiently and affordably, ensuring growth at the lowest possible costs.</p>
              </div>
              <div className="list_content">
                <h4 className="title">8. AnyPresence</h4>
                <img src="/images/blogs/cloud-technologies/8.png" className="blog_img" alt="" />
                <p className="para">AnyPresence is a cloud application development platform known for having an online designer for backend code, mobile application code, and mobile API code.</p>
                <p className="para">This platform - particularly focused on enterprise solutions - provides tools that streamline the development process and simplify Android mobile app creation. As a result, it offers businesses having greater control over costs and development. The reason is that it doesn’t require extensive coding. </p>
              </div>
            </div>

            <div className="right_half">
              <div className="list_content">
                <h4 className="title">9. Appcelerator</h4>
                <p className="para">Appcelerator has some client-side frameworks and some types of APIs for the cloud. It is aimed at enterprise customers. It can run Node. This platform also targets cross-platform solutions. With the help of this resource, it is easy for businesses to scale their Android apps. Then, in case of problems with the server, moving the application to another one is easy.</p>
              </div>
              <div className="list_content">
                <h4 className="title">10. Kumulos</h4>
                <p className="para">Kumulos offers a smart set of tools and capabilities for B2B Android app developers, making it one of the most popular mobile app development platforms. After Parse was shut down, this platform attracted former Parse users, and became a suitable option for businesses with Android apps owing to its user-friendly interface and ease of use for developers. Its main focus is on mobile app backend services, including push notifications, analytics, and mobile app management.</p>
              </div>
              <div className="list_content">
                <h4 className="title">11. Advantages of BaaS for cloud-based android development</h4>
                <img src="/images/blogs/cloud-technologies/11.jpg" className="blog_img" alt="" />
                <div className="smlist">
                  <h4 className="title">1.	Data storage control panel</h4>
                  <p>The Data Storage Control Panel is a user interface provided by the BaaS platform, helping developers create and manage data storage tasks without hassle.</p>
                  <h4 className="title">2.	Low development costs</h4>
                  <p>In addition, you will be pleasantly surprised to know the final cost of your application. Indeed, the use of BaaS promotes the significant reduction of development costs. This happens due to the fact that this type of mobile cloud development requires less time. And, as we know, it is the time spent on developing the application that is converted into its cost.</p>
                  <h4 className="title">3.	Reduced cost of use </h4>
                  <p>One of the best aspects is the platform’s reduced cost of use. Most cloud services, including BaaS, provide the trial period service with a basic set of features for free. When you purchase a paid account, you get access to more advanced features. It is worth mentioning that in some cases, the free version is sufficient. This is the case of small B2B Android apps with few features and users. But if your application claims to be a flagship product, you need to consider purchasing the paid version. And the favorable aspect is that BaaS requires you to invest low for setup, and there is no requirement for investing in physical hardware or manage your own servers. </p>
                  <h4 className="title">4.	Easy app scaling </h4>
                  <p>B2B Android apps created using cloud technologies are much easier to scale due to their flexible infrastructure. You can adjust resources on demand, and this approach allows applications to efficiently handle user numbers, regardless of what the load is, without extensive reconfiguration. The apps created in this way have a higher development speed. This is due to the development of cloud services, providing VPS (Virtual Private Service), which help manage resources in an efficient way. Using BaaS makes it possible to scale Android apps faster and more cost-effectively.</p>
                  <p>Learning how to work with a cloud development environment is simple. They are easy to learn and intelligible to use. Your development team don’t need to handle complex backend tasks. Instead, everything is managed with simple commands within the app.</p>
                </div>
              </div>
              <div className="list_content">
                <h4 className="title">12. Wrap up</h4>
                <img src="/images/blogs/cloud-technologies/12.png" className="blog_img" alt="" />
                <p className="para">Choosing the best service for your Android application may be a difficult task. Usually, the choice of developers is guided by some key factors, including ease of development, scalability, application tasks, and personal preferences. Having talked about the BaaS services, we can conclude that using this technology to create and scale B2B Android apps is cost-effective for businesses looking to remain competitive. However, other than BaaS, Coded Pulse works on other cloud technologies, such as PaaS (Platform as a Service), CDN (Content Delivery Network), Serverless Computing, and others, which are cost-effective to scale B2B Android apps. Now, traditional methods cannot match the speed, scalability, and resilience needed to succeed.</p>
              </div>
            </div>
          </Container>
        </section>
      </div >
    </>
  );
}
