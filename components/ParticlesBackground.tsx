// src/components/ParticlesBackground.tsx
import { useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticlesBackground() {
  useEffect(() => {
    loadFull(tsParticles); // Initialize tsparticles if needed
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Particles
        options={{
          fpsLimit: 60,
          particles: {
            color: { value: "#ffffff" },
            links: { enable: true, color: "#ffffff", distance: 150 },
            move: { enable: true, speed: 0.5 },
          },
        }}
      />
    </div>
  );
}

