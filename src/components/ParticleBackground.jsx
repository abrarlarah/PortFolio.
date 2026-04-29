import { useEffect, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);
  const [isLight, setIsLight] = useState(document.body.classList.contains('light-mode'));

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    const observer = new MutationObserver(() => {
      setIsLight(document.body.classList.contains('light-mode'));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const getOptions = useCallback(() => ({
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "grab" },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        grab: {
          distance: 200,
          links: {
            opacity: 0.6,
            color: "#6c63ff",
          },
        },
      },
    },
    particles: {
      color: {
        value: isLight
          ? ["#4a44b5", "#009c7a", "#d64775", "#0760a3", "#746bbd"] // Darker, more saturated colors for light mode
          : ["#6c63ff", "#00d4aa", "#ff6b9d", "#a29bfe", "#ffa726"],
      },
      links: {
        color: isLight ? "rgba(74, 68, 181, 0.4)" : "rgba(108, 99, 255, 0.25)",
        distance: 130,
        enable: true,
        opacity: isLight ? 0.6 : 0.45,
        width: 1,
        triangles: {
          enable: true,
          opacity: isLight ? 0.05 : 0.03,
        },
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: true,
        speed: 1.2,
        straight: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      number: {
        density: { enable: true, area: 600 },
        value: isLight ? 80 : 100,
      },
      opacity: {
        value: isLight ? { min: 0.2, max: 0.6 } : { min: 0.15, max: 0.6 },
        animation: {
          enable: true,
          speed: 1.2,
          minimumValue: 0.1,
          sync: false,
        },
      },
      shape: {
        type: ["circle", "triangle", "star"],
      },
      size: {
        value: { min: 1, max: 5 },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 1,
          sync: false,
        },
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.05,
          opacity: 1,
          color: {
            value: isLight ? "#6c63ff" : "#00d4aa",
          },
        },
      },
    },
    detectRetina: true,
    fullScreen: {
      enable: true,
      zIndex: 0,
    },
  }), [isLight]);

  if (init) {
    return (
      <Particles
        key={isLight ? 'light' : 'dark'}
        id="tsparticles"
        options={getOptions()}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    );
  }

  return null;
};

export default ParticleBackground;
