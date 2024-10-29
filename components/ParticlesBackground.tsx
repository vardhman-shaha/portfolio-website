// src/components/ParticlesBackground.tsx
import { useCallback } from 'react';
import { Engine } from 'tsparticles-engine'; // Import the correct type from tsparticles
import Particles from 'react-tsparticles'; // Ensure you have the correct import for Particles
import { loadFull } from 'tsparticles'; // Ensure you have the correct import for loadFull

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Correctly initialize tsparticles with the engine instance
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