// src/components/ParticlesBackground.tsx
// eslint-disable-next-line

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    // Properly initialize the tsparticles engine
    await loadFull(engine);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Particles
        init={particlesInit}
        options={{
          fpsLimit: 60,
          particles: {
            color: { value: "#ffffff" },
            links: { enable: true, color: "#ffffff", distance: 150 },
            move: { enable: true, speed: 0.5 },
            number: { value: 50 },
            size: { value: 3 },
          },
        }}
      />
    </div>
  );
}
