import dynamic from 'next/dynamic';
import { IPlayerProps } from '@lottiefiles/react-lottie-player';
import { useState, useEffect, Component, ErrorInfo, ReactNode } from 'react';

const Player = dynamic(
  () => {
    // Ensure we're on client side before importing
    if (typeof window === 'undefined') {
      return Promise.resolve(() => null);
    }
    return import('@lottiefiles/react-lottie-player').then((mod) => ({ default: mod.Player }));
  },
  { 
    ssr: false,
    loading: () => null
  }
);

// Error Boundary for Lottie Player
class LottieErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('LottiePlayer error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default function LottiePlayer(props: IPlayerProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Only set mounted to true on client side after DOM is ready
    if (typeof window !== 'undefined') {
      // Wait for DOM to be fully ready and GSAP to initialize
      // Use requestAnimationFrame to ensure we're after initial render
      const rafId = requestAnimationFrame(() => {
        // Additional small delay to ensure GSAP ScrollTrigger is initialized
        setTimeout(() => {
          setIsMounted(true);
        }, 150);
      });
      return () => {
        cancelAnimationFrame(rafId);
      };
    }
  }, []);

  // Return placeholder during SSR and before mount
  if (!isMounted || typeof window === 'undefined') {
    return <div style={{ display: 'inline-block', width: props.style?.width || 'auto', height: props.style?.height || 'auto' }} />;
  }

  const fallback = <div style={{ display: 'inline-block', width: props.style?.width || 'auto', height: props.style?.height || 'auto' }} />;

  return (
    <LottieErrorBoundary fallback={fallback}>
      <Player {...props} />
    </LottieErrorBoundary>
  );
}

