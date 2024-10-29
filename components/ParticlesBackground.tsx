// src/components/ParticlesBackground.tsx
import Particles from 'react-tsparticles';

export default function ParticlesBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Particles
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
