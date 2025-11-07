import React, { useState, useRef, useEffect, useCallback } from 'react';
import LottiePlayer from "@/components/LottiePlayer";
import { AnimationItem } from "lottie-web";

interface LottieConfig {
  src: string;
  sec?: number;
  style?: React.CSSProperties;
}

interface HoverLottieGroupProps {
  animations: LottieConfig[];
  className?: string;
  href?: string;
  title: string;
  description: string;
}

const HoverLottieGroup: React.FC<HoverLottieGroupProps> = ({ 
  animations, 
  className = '', 
  href = '#', 
  title, 
  description 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const animationRefs = useRef<(AnimationItem | null)[]>([]);

  useEffect(() => {
    animationRefs.current = animationRefs.current.slice(0, animations.length);
  }, [animations]);

  useEffect(() => {
    animationRefs.current.forEach(animation => {
      if (animation) {
        if (isHovered) {
          animation.play();
        } else {
          animation.stop();
        }
      }
    });
  }, [isHovered]);

  const setAnimationRef = useCallback((index: number) => (animationItem: AnimationItem) => {
    animationRefs.current[index] = animationItem;
  }, []);

  return (
    <a 
      href={href} 
      className={`infocard ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex'>
        {animations.map((animation, index) => (
          <LottiePlayer
            key={index}
            lottieRef={setAnimationRef(index)}
            autoplay={false}
            loop={true}
            src={animation.src}
            speed={animation.sec}
            style={animation.style || { height: "5vw", width: "5vw" }}
          />
        ))}
      </div>
      <h4 className='title'>{title}</h4>
      <p className='description'>{description}</p>
    </a>
  );
};

export default HoverLottieGroup;