import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import style from "./index.module.scss";
import { useRef } from "react";
import { gsap, SplitText } from "@/helpers/gsap";
import { useRouter } from "next/router";

export default function LoadingScreen() {
  const main = useRef<HTMLElement>(null);
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    if (!main.current) return;

    const ctx = gsap.context((self: any) => {
      // setTimeout(() => {
      const tl = gsap.timeline({
        paused: true,
        onComplete: () => {
          gsap.set(main.current, { display: "none" });
        },
      });

      tl.to(
        ".lds_ball",
        { x: "140px", duration: 1.5, ease: "power2.inOut" },
        0
      );
      tl.to(
        main.current,
        { background: "#EB0043", duration: 1.5, ease: "power2.inOut" },
        0
      );
      tl.to(
        main.current,
        { scale: "22", duration: 1.5, ease: "power2.inOut" },
        1
      );
      tl.to(
        main.current,
        { opacity: "1", duration: 1.5, ease: "power2.inOut" },
        1
      );
     

      tl.play();
    }, main);

    return () => ctx.revert();
  });

  return (
    <>
      <section className={style.loading_screen} ref={main}>
        <div className={`${style.slider} lds_slider`}>
          <span className={`${style.ball} lds_ball`}></span>
        </div>
        {/* <h1 className={`${style.title} lds_title`}>
          The<span> </span>Suitch...
        </h1> */}
      </section>
    </>
  );
}
