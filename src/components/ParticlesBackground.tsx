import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Container, Engine } from 'tsparticles-engine'

export const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log('Initializing particles engine...')
    await loadSlim(engine)
    console.log('Particles engine loaded successfully')
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log('Particles container loaded:', container)
    if (container) {
      console.log('Particles count:', container.particles.count)
    }
  }, [])

  return (
    <div className="particles-container absolute inset-0 w-full h-full overflow-hidden">
      <Particles
        id="home-particles"
        init={particlesInit}
        loaded={particlesLoaded}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1
        }}
      options={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 1200
            }
          },
          color: {
            value: ["#a855f7", "#ec4899", "#3b82f6", "#c084fc", "#f472b6"]
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            }
          },
          opacity: {
            value: 0.7,
            random: false
          },
          size: {
            value: 3,
            random: true
          },
          line_linked: {
            enable: true,
            distance: 200,
            color: "#a855f7",
            opacity: 0.3,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: true,
              mode: "bubble"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 300,
              size: 20,
              duration: 1.5,
              opacity: 0.8,
              speed: 2
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 2
            },
            remove: {
              particles_nb: 3
            }
          }
        },
        retina_detect: true
      }}
      />
    </div>
  )
}

