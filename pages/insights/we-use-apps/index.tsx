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
        <title>What is next-gen ux, and how is it changing the way we use apps? </title>
      </Head>
      <div>
        <section className="hero-section pb-0 text-center">
          <Container>
            <h4 className="heading hero-big">What is next-gen UX, and how is it changing the way we use apps? </h4>
          </Container>
        </section>

        <section className="section-padding pt-0 blog_wrap">
          <Container ref={containerRef}>
            <div className="side_list" ref={sideListRef}>
              <ul>
                <li>What is the main purpose of UX?</li>
                <li>3 ways to Make Your App Impactful by UX</li>
                <li>What’s Next- Build Anticipation</li>
                <li>Six Benefits Your App Can Get by UX and Design </li>
                <li>Need of Your Audience is Important</li>
                <li>In Short</li>
              </ul>
            </div>
            <div className="right_half">
              <img src="/images/blogs/we-use-apps/6.png" className="blog_img" alt="" />
              <div className="first_msg">
                <p className="para mb-3">Are you familiar with the term UX? Whether the answer is yes or no but, you are still engaged with UX, so delve into knowing about  UX with an example.</p>
                <p className="para">User Experience = UX, and it is the method used by design teams to produce products that offer customers relevant and meaningful experiences, which is known as user experience (UX) design. Now, it is time to figure out the impact of UX on business and other apps. Also, be aware of strategies for perfect User experience and adopt changes.  </p>
              </div>
            
              <div className="list_content">
                <h4 className="title">1. What is the main purpose of UX?</h4>
                <img src="/images/blogs/we-use-apps/1.jpg" className="blog_img" alt="" />
                <p className="para">The aim of UX is to provide the user with an efficient, desired and relevant experience, UX focuses crucially on users understanding their requirements and value. It also keeps some limitations for users and takes into account the mission of the company or organization.</p>
              </div>
              <div className="list_content">
                <h4 className="title">2. 3 ways to make your app impactful by UX</h4>
                <img src="/images/blogs/we-use-apps/2.png" className="blog_img" alt="" />
              </div>
            </div>
            <img src="/images/blogs/we-use-apps/big/1.webp" className="blog_img" alt=""
              ref={(el) => {
                if (el && !blogImgRefs.current.includes(el)) {
                  blogImgRefs.current.push(el);
                }
              }}
            />
            <div className="right_half">
              <div className="list_content">
                <h4 className="title">3. What’s next-build anticipation</h4>
              <img src="/images/blogs/we-use-apps/5.png" className="blog_img" alt="" />
                <p className="para">Based on the user’s interactions with the system, On the basis of user interaction, the UX design must surprisingly meet the need and you can get action for the action. This will enhance the user experience, keep them involved,  and grab more interest in the ways users interact with the system.</p>
                <p className="para">The UX systems utilize the to bring relevant data and functions to the current task based on logic, historical user activity & interaction data, and a solid assumption of the user’s expectation.</p>
                <div className="smlist">
                  <h4 className="title">1.	Clarification</h4>
                  <p>Let’s learn from Google how to keep the user hassle free and save their worthy time. Take the auto-fill feature for forms It recollects the user’s information input (based on the username or ID) and automatically fills in the other details then the UX will be considered a good one.</p>
                  <h4 className="title">2.	Customer-centric intuitive designs</h4>
                  <p>The relationship between people, machines, and data has been reimagined by modern designs. Keyboards are giving way to touchscreens, voice commands, and other interfaces. Finding the lowest friction simplicity in linking mental and conceptual models is the main goal.</p>
                  <p>User attention is diverted from task completion to task completion by intuitive UX designs. For instance, streams of pictures and videos can recognize the context of their surroundings and validate the identities of certain people.</p>
                  <p>Sophisticated voice capabilities provide easy and natural interactions with intricate systems. Moreover, AI-based systems are able to react to motion-based user commands by interpreting human gestures, head movements, and gazes. For a smooth, user-friendly experience, intelligent interfaces integrate computer vision, conversational voice, acoustic analytics, and cutting-edge augmented and virtual reality.</p>
                  <p>Even if the items don’t come from the same information architecture bucket, intuitive dashboards group pertinent information together and present it in context. Users that have an intuitive user experience (UX) don’t need to click, jump, or search for information because tooltips, target messages, and auto-recommendations are all there.</p>
                  <h4 className="title">3.	Efficient</h4>
                  <p>User goals may be quickly and easily established with the help of effective UX designs. This entails making the most use of available resources and industry best practices in order to finish tasks, reduce noise, and meet user objectives. Users can focus on other tasks and save time and effort by performing a common action on many accounts or components.</p>
                </div>
              </div>
              <div className="list_content">
                <h4 className="title">4. Six benefits your app can get by UX and design </h4>
                <img src="/images/blogs/we-use-apps/3.png" className="blog_img" alt="" />
                <p className="para">By having perfection in UX, you can reap the fruits of hard work. Following are the benefits you don’t want to miss. </p>
                <div className="smlist">
                  <h4 className="title">1.	Customer retention and engagement</h4>
                  <p>A well-designed user experience on mobile retains existing and new features. It is also fruitful in attracting new clients. The more you are aware of the needs of the audience and user in terms of function, the more apt the future need could be a wonderful engagement level aptly. Being a part of a software development company, you must be able to assume you are a user of your own app to feel the pain point and know the need. Keep the rules in mind of Mobile App UX and ensure to delivery of the app that ends up with user attention. This strategy is helpful in making your app efficient.</p>
                  <h4 className="title">2.	Positive feedback and customer satisfaction</h4>
                  <p>Perfect UX design fosters a positive emotional connection with customers. It also generates reviews that also grab the attention of new customers. Customer satisfaction is ensured by UX directing the creation of custom software. It accomplishes this by ensuring that the design and interaction live up to user expectations. For example, a user may have different expectations from those of a mobile banking app and a mobile gaming game. It’s critical to make sure your app fulfills both user expectations and your goals.</p>
                  <h4 className="title">3.	Cost effective and boost sales</h4>
                  <p>An e-commerce website and app can increase sales by lowering cart abandonment rates with a simplified checkout procedure.</p>
                  <h4 className="title">3.	Brand reputation</h4>
                  <p>Concentrating on a good UX design is helpful in making your brand more attractive to potential customers and even employees.</p>
                  <h4 className="title">3.	Target audience</h4>
                  <p>The interface will be made both interactive and intuitive with UX design. The client’s chances of receiving a respectable return on investment are increased when UX design is taken into consideration at every stage of the app development process.</p>
                  <p>An expert UX engineer will possess a thorough comprehension of the intended user base, market trends that could affect the app’s perception and usage, industry requirements, and user wants. Usually, this will be supported by thorough market research. Now, we are aware of UX’s benefits. It is a critical thing to remember when generating software solutions. Moreover, it is a subjective quality that explains why a client wants to use your app. What is their perspective and how do they feel about your app? So, it is all about usability, which includes simplicity and accessibility.</p>
                </div>
              </div>
              <div className="list_content">
                <h4 className="title">5. Need of your audience is important</h4>
                <img src="/images/blogs/we-use-apps/4.jpg" className="blog_img" alt="" />
                <p className="para">The process of developing the best digital mobile apps utterly depends upon user demand. User experience, which includes every aspect of a user’s interaction with the software, is crucial to making it happen.</p>
                <p className="para">By developing an application that is both extremely useful and easy to use, user experience (UX) aims to gain the trust and confidence of users. By prioritizing user experience (UX) throughout the mobile app development process, you may better understand the demands of your target audience. Certainly, it will tell you what the preference of your audience is, what the user needs are, and what the probability of pattern usage is.</p>
              </div>
              <div className="list_content">
                <h4 className="title">In short</h4>
                <p className="para">These are a few of the top companies’ current best market practices that address the five previously listed crucial elements of UX design. There are only a few who consider and implement the UX strategies listed above. The key elements and best practices for the top companies are listed above. If would you like to apply the best strategies to your UX design, contact Coded Pulse.</p>
              </div>
            </div>

          </Container>
        </section>
      </div >
    </>
  );
}
