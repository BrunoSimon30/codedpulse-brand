import "bootstrap/dist/css/bootstrap.min.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import "@/styles/icomoon/style.css";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import React, { useRef } from "react";
import Head from "next/head";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { gsap, SplitText, ScrollTrigger } from "@/helpers/gsap";
// import { SmoothScroll } from "@/helpers/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";
import SmoothScrolling from "@/components/SmoothScrolling";
// import FluidCanvasHover from "@/components/FluidHover";

import dynamic from "next/dynamic";
import { ModalProvider } from "@/context/ModalContext";

// Feature flag to enable/disable FluidCanvasHover
// Currently disabled due to React Three Fiber v8 compatibility issue with @whatisjery/react-fluid-distortion
const ENABLE_FLUID_CANVAS = false;

// Dynamically import the FluidDistortion component only on the client side
// Wrap it to ensure GSAP ScrollTrigger is ready before rendering
const FluidCanvasHoverBase = dynamic(() => import("@/components/FluidHover"), {
  ssr: false,
});

// Error Boundary for FluidCanvasHover
class FluidCanvasErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('FluidCanvasHover error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

// Wrapper component to ensure React Three Fiber and GSAP are ready
const FluidCanvasHover = () => {
  // If feature is disabled, return null immediately
  if (!ENABLE_FLUID_CANVAS) {
    return null;
  }

  const [isReady, setIsReady] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    // Ensure we're on client side
    setIsMounted(true);
    
    if (typeof window === 'undefined') return;

    // Wait for both GSAP ScrollTrigger and React Three Fiber to be fully initialized
    const checkAndMount = () => {
      try {
        // Check if ScrollTrigger is registered and ready
        const scrollTriggerReady = ScrollTrigger && typeof ScrollTrigger.refresh === 'function';
        
        // Check if React Three Fiber is available and DOM is ready
        const r3fReady = typeof window !== 'undefined' && 
          typeof window.requestAnimationFrame === 'function' &&
          document.readyState === 'complete' &&
          document.body !== null;
        
        if (scrollTriggerReady && r3fReady) {
          // Longer delay to ensure React Three Fiber context is fully initialized
          // The Fluid component needs R3F's internal context to be ready
          setTimeout(() => {
            setIsReady(true);
          }, 1500);
        } else {
          // If not ready yet, wait and try again
          setTimeout(checkAndMount, 200);
        }
      } catch (e) {
        // If error, wait a bit and try again
        console.warn('FluidCanvasHover initialization error:', e);
        setTimeout(checkAndMount, 200);
      }
    };

    // Wait for page to be fully loaded and all scripts executed
    if (document.readyState === 'complete') {
      // Additional delay to ensure all modules are loaded
      setTimeout(checkAndMount, 500);
    } else {
      window.addEventListener('load', () => {
        setTimeout(checkAndMount, 500);
      });
    }
  }, []);

  if (typeof window === 'undefined' || !isMounted || !isReady) {
    return null;
  }

  return (
    <FluidCanvasErrorBoundary>
      <React.Suspense fallback={null}>
        <FluidCanvasHoverBase />
      </React.Suspense>
    </FluidCanvasErrorBoundary>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  const main = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!main.current || typeof window === 'undefined') return;
    
    // Ensure GSAP and ScrollTrigger are fully initialized before using context
    if (typeof window === 'undefined' || !gsap || !ScrollTrigger) return;
    
    // Ensure ScrollTrigger is registered before use
    // GSAP allows safe multiple registrations, so we can just register it
    try {
      // Register ScrollTrigger (safe to call multiple times)
      gsap.registerPlugin(ScrollTrigger);
    } catch (e) {
      // If registration fails, continue anyway
      console.warn('ScrollTrigger registration warning:', e);
    }

    let ctx: gsap.Context | null = null;
    let mediaQuery: MediaQueryList | null = null;
    let handleResize: (() => void) | null = null;

    // Small delay to ensure GSAP is fully ready
    const initTimeout = setTimeout(() => {
      if (!main.current) return;

      ctx = gsap.context((self) => {
        gsap.to(".splash_screen", {
          opacity: 0,
          duration: 1,
          delay: 0.5,
          onComplete: () => {
            gsap.set(".splash_screen", { visibility: "collapse" });
          },
        });

        mediaQuery = window.matchMedia("(min-width: 992px)");

        handleResize = () => {
          if (mediaQuery && mediaQuery.matches) {
            // Execute GSAP animations if the viewport width is greater than 992px
            // Delay to ensure all dynamic components are loaded
            setTimeout(() => {
              // GLOBAL TEXT ANIMATIONS
              const mHeadings = document.querySelectorAll(".mheading");
              mHeadings.forEach((element) => {
                let split = new SplitText(element, {
                  type: "lines, words",
                  linesClass: "overflow-hidden",
                });
                let tl = gsap.timeline({
                  scrollTrigger: {
                    trigger: element,
                    // scroller: ".main_wrapper",
                  },
                });
                tl.fromTo(
                  split.words,
                  { y: "100%" },
                  { y: "%", duration: 1, stagger: 0.03 }
                );
              });
              const headings = document.querySelectorAll(
                ".heading:not(.hero-big)"
              );
              headings.forEach((element) => {
                let split = new SplitText(element, {
                  type: "lines, words",
                  linesClass: "overflow-hidden",
                });
                let tl = gsap.timeline({
                  scrollTrigger: {
                    trigger: element,
                    // scroller: ".main_wrapper",
                  },
                });
                tl.fromTo(
                  split.words,
                  { y: "100%" },
                  { y: "%", duration: 1, stagger: 0.03 }
                );
              });

              const watermark = document.querySelector(".watermark");
              if (watermark) {
                let wTl = gsap.timeline({
                  scrollTrigger: {
                    trigger: watermark,
                    scrub: true,
                    // scroller: ".main_wrapper",
                  },
                });
                wTl.fromTo(watermark, { scale: "1.5" }, { scale: "1" });
              }

              // Refresh ScrollTrigger after all components are loaded
              if (typeof window !== 'undefined') {
                ScrollTrigger.refresh();
              }
            }, 100);
          } else {
            // Revert GSAP animations if the viewport width is less than 992px
          }
        };

        // Initial check with delay to ensure components are mounted
        setTimeout(() => {
          if (handleResize) {
            handleResize();
          }
        }, 100);

        // Add event listener for window resize
        if (mediaQuery && handleResize) {
          mediaQuery.addEventListener("change", handleResize);
        }
      }, main);
    }, 50);

    // Cleanup function
    return () => {
      clearTimeout(initTimeout);
      if (mediaQuery && handleResize) {
        mediaQuery.removeEventListener("change", handleResize);
      }
      if (ctx && typeof ctx.revert === 'function') {
        ctx.revert();
      }
    };
  }, []);

  // useIsomorphicLayoutEffect(() => {
  //   if (!main.current) return;

  //   const ctx = gsap.context((self: any) => {
  //     // SmoothScroll(
  //     //   window.document.querySelector(".main_wrapper") as HTMLElement
  //     // );
  //     // setTimeout(() => {
  //     gsap.to(".splash_screen", {
  //       opacity: 0,
  //       duration: 1,
  //       delay: 0.5,
  //       onComplete: () => {
  //         gsap.set(".splash_screen", { visibility: "collapse" });
  //       },
  //     });

  //     // GLOBAL TEXT ANIMATIONS
  //     const mHeadings = document.querySelectorAll(".mheading");
  //     mHeadings.forEach((element) => {
  //       let split = new SplitText(element, {
  //         type: "lines, words",
  //         linesClass: "overflow-hidden",
  //       });
  //       let tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: element,
  //           // scroller: ".main_wrapper",
  //         },
  //       });
  //       tl.fromTo(
  //         split.words,
  //         { y: "100%" },
  //         { y: "%", duration: 1, stagger: 0.03 }
  //       );
  //     });
  //     const headings = document.querySelectorAll(".heading:not(.hero-big)");
  //     headings.forEach((element) => {
  //       let split = new SplitText(element, {
  //         type: "lines, words",
  //         linesClass: "overflow-hidden",
  //       });
  //       let tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: element,
  //           // scroller: ".main_wrapper",
  //         },
  //       });
  //       tl.fromTo(
  //         split.words,
  //         { y: "100%" },
  //         { y: "%", duration: 1, stagger: 0.03 }
  //       );
  //     });

  //     const watermark = document.querySelector(".watermark");
  //     let wTl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: watermark,
  //         scrub: true,
  //         // scroller: ".main_wrapper",
  //       },
  //     });
  //     wTl.fromTo(watermark, { scale: "1.5" }, { scale: "1" });
  //     // }, 4);
  //   }, main);

  //   return () => ctx.revert();
  // });
  return (
    <>
      {/* <LoadingScreen /> */}
      <Head>
        <link rel="icon" type="image/svg" href="/favicon.ico" />
      </Head>
      <ModalProvider>
        <SmoothScrolling>
          <section ref={main} className="main_wrapper">
            <Header />
            <div className="splash_screen"></div>
            <div className="fluid_canvas">
              <FluidCanvasHover />
            </div>
            <div className="innerwrap">
              {/* <Toaster /> */}
              <Component {...pageProps} />
            </div>
            <Footer />
          </section>
        </SmoothScrolling>
      </ModalProvider>
    </>
  );
}
