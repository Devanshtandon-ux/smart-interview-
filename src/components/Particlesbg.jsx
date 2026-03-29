import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 50 },
          color: { value: "#a855f7" },
          links: {
            enable: true,
            color: "#a855f7",
            distance: 120,
          },
          move: {
            enable: true,
            speed: 1,
          },
          size: { value: 2 },
          opacity: { value: 0.5 },
        },
      }}
      className="absolute inset-0 z-10"
    />
  );
}