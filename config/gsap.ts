import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Default animation durations
export const DURATIONS = {
  fast: 0.3,
  normal: 0.6,
  slow: 1,
  verySlow: 1.5,
} as const;

// Default easing functions
export const EASINGS = {
  power1: "power1.out",
  power2: "power2.out",
  power3: "power3.out",
  power4: "power4.out",
  back: "back.out(1.7)",
  elastic: "elastic.out(1, 0.5)",
  bounce: "bounce.out",
  smooth: "power2.inOut",
} as const;

// Stagger configurations
export const STAGGER = {
  fast: 0.1,
  normal: 0.15,
  slow: 0.2,
} as const;

// Common animation presets
export const fadeIn = (element: gsap.TweenTarget, options = {}) => {
  return gsap.from(element, {
    opacity: 0,
    y: 30,
    duration: DURATIONS.normal,
    ease: EASINGS.power2,
    ...options,
  });
};

export const fadeInUp = (element: gsap.TweenTarget, options = {}) => {
  return gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: DURATIONS.normal,
    ease: EASINGS.power3,
    ...options,
  });
};

export const fadeInDown = (element: gsap.TweenTarget, options = {}) => {
  return gsap.from(element, {
    opacity: 0,
    y: -50,
    duration: DURATIONS.normal,
    ease: EASINGS.power3,
    ...options,
  });
};

export const fadeInLeft = (element: gsap.TweenTarget, options = {}) => {
  return gsap.from(element, {
    opacity: 0,
    x: -50,
    duration: DURATIONS.normal,
    ease: EASINGS.power3,
    ...options,
  });
};

export const fadeInRight = (element: gsap.TweenTarget, options = {}) => {
  return gsap.from(element, {
    opacity: 0,
    x: 50,
    duration: DURATIONS.normal,
    ease: EASINGS.power3,
    ...options,
  });
};

export const scaleIn = (element: gsap.TweenTarget, options = {}) => {
  return gsap.from(element, {
    opacity: 0,
    scale: 0.8,
    duration: DURATIONS.normal,
    ease: EASINGS.back,
    ...options,
  });
};

export const slideInLeft = (element: gsap.TweenTarget, options = {}) => {
  return gsap.from(element, {
    x: -100,
    opacity: 0,
    duration: DURATIONS.slow,
    ease: EASINGS.power4,
    ...options,
  });
};

export const slideInRight = (element: gsap.TweenTarget, options = {}) => {
  return gsap.from(element, {
    x: 100,
    opacity: 0,
    duration: DURATIONS.slow,
    ease: EASINGS.power4,
    ...options,
  });
};

// ScrollTrigger preset configurations
export const createScrollTrigger = (
  trigger: string | Element,
  options: ScrollTrigger.Vars = {}
) => {
  return {
    scrollTrigger: {
      trigger,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      ...options,
    },
  };
};

export const createStickyScrollTrigger = (
  trigger: string | Element,
  options: ScrollTrigger.Vars = {}
) => {
  return {
    scrollTrigger: {
      trigger,
      start: "top top",
      end: "bottom top",
      pin: true,
      scrub: true,
      ...options,
    },
  };
};

// Stagger animation helper
export const staggerFadeIn = (
  elements: gsap.TweenTarget,
  staggerAmount = STAGGER.normal,
  options = {}
) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 30,
    duration: DURATIONS.normal,
    ease: EASINGS.power2,
    stagger: staggerAmount,
    ...options,
  });
};

// Timeline creator with defaults
export const createTimeline = (options: gsap.TimelineVars = {}) => {
  return gsap.timeline({
    defaults: {
      duration: DURATIONS.normal,
      ease: EASINGS.power2,
    },
    ...options,
  });
};

// Hover animation helpers
export const hoverScale = (element: gsap.TweenTarget, scale = 1.05) => {
  return gsap.to(element, {
    scale,
    duration: DURATIONS.fast,
    ease: EASINGS.power1,
  });
};

export const hoverReset = (element: gsap.TweenTarget) => {
  return gsap.to(element, {
    scale: 1,
    duration: DURATIONS.fast,
    ease: EASINGS.power1,
  });
};

// Export gsap instance
export { gsap, ScrollTrigger };
