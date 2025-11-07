import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { gsap } from "@/helpers/gsap";

// Define interface for blog data
interface BlogPost {
  id: number;
  title: string;
  description: string;
  url: string;
  mediaType: 'video' | 'image';
  mediaSrc: string;
  poster?: string;
  size: 'big' | 'halfbig' | 'regular';
}

// Blog data array
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "They don't want you to know these secrets about rebranding",
    description: "Rebranding—just hearing the word might make business owners nervous. It's like giving your brand a makeover, but with the pressure of keeping it familiar.",
    url: "/insights/about-rebranding",
    mediaType: "video",
    mediaSrc: "/media/video4.webm",
    poster: "/images/rectangle372.png",
    size: "big"
  },
  {
    id: 2,
    title: "You heard it right!!",
    description: "When starting a new project, especially in app development, one of the biggest concerns is the risk involved",
    url: "/insights/development-risks",
    mediaType: "video",
    mediaSrc: "/media/video5.webm",
    poster: "/images/rectangle372.png",
    size: "halfbig"
  },
  {
    id: 3,
    title: "Your marketing agency",
    description: "Let’s face it—marketing moves fast, and if your creative agency isn’t keeping up with the latest trends, you’re falling behind",
    url: "/insights/these-top-trends",
    mediaType: "image",
    mediaSrc: "/images/image142.png",
    poster: "/images/image142.png",
    size: "halfbig"
  },
  {
    id: 4,
    title: "In the modern marketplace",
    description: "Let’s dive into why your brand might be going deaf—and why the future",
    url: "/insights/brands-that-listen",
    mediaType: "video",
    mediaSrc: "/media/video3.webm",
    poster: "/images/rectangle372.png",
    size: "halfbig"
  },
  {
    id: 5,
    title: "Are you too making...",
    description: "Imagine you’re on a cross-country road trip.",
    url: "/insights/product-roadmap",
    mediaType: "image",
    mediaSrc: "/images/image14.png",
    poster: "/images/rectangle372.png",
    size: "halfbig"
  },
  {
    id: 6,
    title: "Experienced developers",
    description: "What happens when you hire a mobile app development agency",
    url: "/insights/common-financial",
    mediaType: "image",
    mediaSrc: "/images/developers.png",
    poster: "/images/rectangle372.png",
    size: "halfbig"
  },
  {
    id: 7,
    title: "What is the main purpose",
    description: "The aim of UX is to provide the user with an efficient",
    url: "/insights/we-use-apps",
    mediaType: "video",
    mediaSrc: "/media/main_purpose.webm",
    poster: "/images/rectangle372.png",
    size: "halfbig"
  },
  {
    id: 8,
    title: "A no-code MVP is exactly",
    description: "Instead of waiting months for a development team",
    url: "/insights/startup-needs-one",
    mediaType: "image",
    mediaSrc: "/images/no-code-MVP.png",
    poster: "/images/rectangle372.png",
    size: "halfbig"
  },
  {
    id: 9,
    title: "Application scaling",
    description: "Creating mobile application backends using services like BaaS",
    url: "/insights/cloud-technologies",
    mediaType: "video",
    mediaSrc: "/media/app_scaling.webm",
    poster: "/images/rectangle372.png",
    size: "halfbig"
  },
];

function OurInsightsBlogPage() {
  const main = useRef<HTMLElement>(null);


  useIsomorphicLayoutEffect(() => {
    if (!main.current) return;

    const ctx = gsap.context(() => {
      const mediaQuery = window.matchMedia('(min-width: 992px)');

      const handleResize = () => {
        if (mediaQuery.matches) {
          gsap.killTweensOf(".pining_item");

          setTimeout(() => {
            const pinTl = gsap.timeline({
              scrollTrigger: {
                trigger: main.current,
                scrub: true,
                pin: ".pining_item",
                start: "top +=50px",
                end: "bottom +700px",
              },
            });

            document.querySelectorAll('.paral_item').forEach((element) => {
              gsap.timeline({
                scrollTrigger: {
                  trigger: element,
                  scrub: true,
                }
              });
            });
          }, 40);
        }
      };

      handleResize();
      mediaQuery.addEventListener('change', handleResize);

      return () => {
        mediaQuery.removeEventListener('change', handleResize);
        ctx.revert();
      };
    }, main);

  }, []);

  const renderMedia = (post: BlogPost) => {
    if (post.mediaType === 'video') {
      return (
        <video
          src={post.mediaSrc}
          poster={post.poster}
          autoPlay
          muted
          loop
        />
      );
    }
    return <img src={post.mediaSrc} alt={post.title} />;
  };

  return (
    <section className="section-padding bg-purple blogs_section" ref={main}>
      <Container>
        <div className="blog-card">
          <Row>
            <Col lg="6" className="mb-lg-0 mb-4">
              <div className="pining_item">
                {blogPosts.slice(0, 1).map(post => (
                  <Link key={post.id} href={post.url} target="_blank" className="bloglink">
                    <div className={`video ${post.size} paral_item`}>
                      {renderMedia(post)}
                    </div>
                    <div className="flex_between">
                      <div>
                        <h3 className="title">{post.title}</h3>
                        <p className="para">{post.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Col>
            <Col lg="6">
              <Row>
                <Col md="6">
                  {blogPosts.slice(1, 5).map(post => (
                    <Link key={post.id} href={post.url} target="_blank" className="bloglink">
                      <div className={`${post.mediaType === 'video' ? 'video halfbig' : 'blog_image'} paral_item ${post.mediaType === 'image' ? 'imgblog' : ''}`}>
                        {post.mediaType === 'video' ? (
                          <video src={post.mediaSrc} poster={post.poster} autoPlay muted loop />
                        ) : (
                          <img src={post.mediaSrc} alt={post.title} />
                        )}
                      </div>
                      <div className="flex_between">
                        <div>
                          <h3 className="title">{post.title}</h3>
                          <p className="para">{post.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </Col>
                <Col md="6">
                  {blogPosts.slice(5, 9).map(post => (
                    <Link key={post.id} href={post.url} target="_blank" className="bloglink">
                      <div className={`${post.mediaType === 'video' ? 'video halfbig' : 'blog_image'} paral_item ${post.mediaType === 'image' ? 'imgblog' : ''}`}>
                        {post.mediaType === 'video' ? (
                          <video src={post.mediaSrc} poster={post.poster} autoPlay muted loop />
                        ) : (
                          <img src={post.mediaSrc} alt={post.title} />
                        )}
                      </div>
                      <div className="flex_between">
                        <div>
                          <h3 className="title">{post.title}</h3>
                          <p className="para">{post.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default OurInsightsBlogPage;