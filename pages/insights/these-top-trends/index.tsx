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
        <title>What? Your marketing agency not following these top trends?</title>
      </Head>
      <div>
        <section className="hero-section pb-0 text-center">
          <Container>
            <h4 className="heading hero-big">What? your marketing agency not following these top trends?</h4>
          </Container>
        </section>

        <section className="section-padding pt-0 blog_wrap">
          <Container ref={containerRef}>
            <div className="side_list" ref={sideListRef}>
              <ul>
                <li>Video Content: The King of Engagement</li>
                <li>Personalized Marketing: Make It About Them</li>
                <li>Social Commerce: Turning Likes into Sales</li>
                <li>Voice Search: Be Heard, Literally</li>
                <li>Authenticity: Keep It Real</li>
                <li>Data-Driven Decisions: Numbers Don’t Lie</li>
                <li>Time to Get Real About Your Agency!</li>
                <li>It’s Time To Knock For A Change!</li>
              </ul>
            </div>
            <div className="right_half">
              <img src="/images/blogs/these-top-trends/9.jpg" className="blog_img" alt="" />
              <div className="first_msg">
                <p className="para">Let’s face it—marketing moves fast, and if your creative agency isn’t keeping up with the latest trends, you’re falling behind. The digital world doesn’t wait for anyone, and neither should your brand. So, here’s the big question: Is your agency on top of these must-follow trends? If not, it might be time to rethink who’s handling your marketing.</p>
              </div>

              <div className="list_content">
                <h4 className="title">1. Video content: the king of engagement</h4>
                <img src="/images/blogs/these-top-trends/1.jpg" className="blog_img" alt="" />
                <p className="para">Video content isn’t just popular—it’s dominating the scene. It’s quick, it’s engaging, and it grabs attention like nothing else. If your agency isn’t making video a central part of your strategy, you’re missing out on a huge opportunity to connect with your audience. Video isn’t just another trend—it’s essential. Don’t let your brand fall behind because your agency isn’t using the power of video.</p>
                <p className="para">In fact, video content is favored by most social media algorithms, meaning your posts are more likely to be seen by a wider audience when they include video. It’s not just about producing any video, though—it’s about creating content that resonates. From tutorials and product demos to live streams and behind-the-scenes footage, video brings a unique way to showcase your brand’s personality, making your message more memorable and impactful.</p>
              </div>
              <div className="list_content">
                <h4 className="title">2. Personalized marketing: make it about them</h4>
                <img src="/images/blogs/these-top-trends/2.jpg" className="blog_img" alt="" />
                <p className="para">People love feeling special. Today’s customers want content that speaks directly to them. If your agency isn’t personalizing your marketing efforts, you’re losing a key connection with your audience. It’s not just about slapping a name on an email—it’s about delivering content that feels tailor-made for each person. Personalization is the name of the game, and your agency needs to play it.</p>
                <p className="para">Beyond personalized emails, brands are now focusing on creating customized shopping experiences, targeted social ads, and even personalized product recommendations. Customers are more likely to engage and make a purchase when the marketing they receive feels like it’s just for them. Your agency should be utilizing data, AI, and segmentation strategies to craft these hyper-targeted experiences. If personalization isn’t front and center in your strategy, you’re leaving a critical touchpoint untouched.</p>
              </div>
            </div>
            <img src="/images/blogs/these-top-trends/big/1.webp" className="blog_img" alt=""
              ref={(el) => {
                if (el && !blogImgRefs.current.includes(el)) {
                  blogImgRefs.current.push(el);
                }
              }}
            />
            <div className="right_half">
              <div className="list_content">
                <h4 className="title">3. Social commerce: turning likes into sales</h4>
                <img src="/images/blogs/these-top-trends/3.jpg" className="blog_img" alt="" />
                <p className="para">Social media isn’t just for likes and comments anymore—it’s where people are shopping. Platforms like Instagram and Facebook are becoming the new marketplaces. If your agency isn’t leveraging social commerce, you’re leaving potential sales on the table. It’s time to turn those likes into actual revenue by making it easy for customers to shop directly through social media.</p>
                <p className="para">Social commerce is also about creating a seamless, enjoyable shopping experience directly within the social platform. It allows brands to shorten the sales funnel by turning engagement into conversions quickly and effectively. From shoppable posts and stories to influencer partnerships, social commerce is redefining how businesses sell online, and your agency should be tapping into this growing trend to drive revenue.</p>
              </div>
              <div className="list_content">
                <h4 className="title">4. Voice search: be heard, literally</h4>
                <img src="/images/blogs/these-top-trends/4.jpg" className="blog_img" alt="" />
                <p className="para">Voice search is on the rise, and it’s changing the way people find information. If your agency isn’t optimizing for voice search, your brand might not even be in the running. Voice search optimization is about making sure your content is easy to find when people use their voice to search. It’s a growing trend, and you don’t want to miss out.</p>
                <p className="para">Optimizing for voice search means focusing on conversational keywords and ensuring your website’s content answers specific, spoken queries. People use voice search differently from text search, often asking complete questions rather than typing keywords. By optimizing for natural language and implementing structured data, your brand can rank higher in voice search results. This is especially crucial as more consumers turn to devices like smart speakers and mobile voice assistants to find the products and services they need.</p>
              </div>
              <div className="list_content">
                <h4 className="title">5. Authenticity: keep it real</h4>
                <img src="/images/blogs/these-top-trends/5.jpg" className="blog_img" alt="" />
                <p className="para">In a world full of noise, authenticity cuts through. Customers are tired of brands that feel fake or out of touch. If your agency isn’t focusing on making your brand feel genuine and trustworthy, it’s time to step up. Authenticity isn’t just a nice-to-have—it’s what builds real connections and keeps customers coming back.</p>
                <p className="para">Authenticity goes beyond simply being transparent—it’s about being consistent in your messaging, living up to your brand values, and delivering on your promises. Consumers today are quick to spot inauthentic marketing, and they’re not afraid to call it out. Your brand’s authenticity can be built through user-generated content, customer testimonials, and showcasing the real stories behind your business. If your agency isn’t making an effort to show the human side of your brand, it’s time to rethink their approach.</p>
              </div>
            </div>
            <img src="/images/blogs/these-top-trends/big/2.webp" className="blog_img" alt=""
              ref={(el) => {
                if (el && !blogImgRefs.current.includes(el)) {
                  blogImgRefs.current.push(el);
                }
              }}
            />
            <div className="right_half">
              <div className="list_content">
                <h4 className="title">6. Data-Driven decisions: numbers don’t lie</h4>
                <img src="/images/blogs/these-top-trends/6.jpg" className="blog_img" alt="" />
                <p className="para">Data is everything in today’s marketing world. It’s how you know what’s working and what’s not. If your agency isn’t using data to drive your marketing strategy, you’re basically flying blind. Data-driven decisions help you make smarter choices and get better results. Trust the numbers—they’ll guide you to success.</p>
                <p className="para">Beyond basic metrics like click-through rates and conversions, today’s top agencies are leveraging advanced analytics to gain deeper insights. From customer behavior patterns to predictive analysis, data can reveal opportunities to optimize campaigns, improve customer experiences, and increase ROI. A data-driven approach ensures that every decision is informed and strategic, rather than based on guesswork. If your agency isn’t leveraging this power, they’re missing a major opportunity to refine and enhance your marketing efforts.</p>
              </div>
              <div className="list_content">
                <h4 className="title">7. Time to get real about your agency!</h4>
                <img src="/images/blogs/these-top-trends/7.jpg" className="blog_img" alt="" />
                <p className="para">If your creative agency isn’t keeping up with these top trends, it’s time to ask some serious questions. The digital world is evolving fast, and your brand needs an agency that’s ready to evolve with it. So, is your agency up to speed? If not, maybe it’s time to explore new options and make sure your brand is ahead of the game.</p>
                <p className="para">When choosing an agency, it’s not just about looking at what they’ve done in the past—it’s about seeing if they have the vision to take your brand into the future. A forward-thinking agency stays proactive, constantly adapting to the ever-changing marketing landscape. If your agency isn’t evolving, they’re not just holding you back—they could be costing you growth. Make sure you’re working with a team that’s ready to take your business to the next level.</p>
              </div>
              <div className="list_content">
                <h4 className="title">8. It’s time to knock for a change!</h4>
                <img src="/images/blogs/these-top-trends/8.jpg" className="blog_img" alt="" />
                <p className="para">We heard it! You’ve been frustrated with the same old strategies that just aren’t delivering results. Your brand deserves better, and it’s clear that sticking with the status quo isn’t going to cut it anymore. It’s time to knock on a new door and find a partner who’s ready to take your brand to the next level. At Coded Pulse, we’re all about fresh ideas, innovative strategies, and making sure your brand is always ahead of the curve. Let’s make the change your brand needs.</p>
                <p className="para">Don’t settle for an agency that’s stuck in the past. Now is the perfect time to embrace new strategies, bold ideas, and an agency that genuinely cares about your brand’s success. At Coded Pulse, we’re all about fresh ideas, innovative strategies, and making sure your brand is always ahead of the curve. The future of marketing is exciting—let’s walk through that door together and make it happen.</p>
              </div>
             
            </div>
          </Container>
        </section>
      </div >
    </>
  );
}
