import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

export default function useAnimeAnimations() {
  useEffect(() => {
    /* 1. 3D Background Objects */
    const bgScene = document.getElementById('bg-3d-scene');
    if (bgScene && bgScene.children.length === 0) {
      for(let i=0; i<8; i++) {
        let shape = document.createElement('div');
        shape.classList.add('bg-shape');
        let size = Math.random() * 300 + 100;
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.left = `${Math.random() * 100}vw`;
        shape.style.top = `${Math.random() * 100}vh`;
        shape.style.transform = `translateZ(${Math.random() * -500}px) rotateX(${Math.random()*360}deg) rotateY(${Math.random()*360}deg)`;
        bgScene.appendChild(shape);

        anime({
          targets: shape,
          rotateX: () => `+=${Math.random() > 0.5 ? 360 : -360}deg`,
          rotateY: () => `+=${Math.random() > 0.5 ? 360 : -360}deg`,
          translateZ: () => Math.random() * -1000,
          duration: () => anime.random(20000, 40000),
          loop: true,
          easing: 'linear',
          direction: 'alternate'
        });
      }
    }

    /* 2. Mouse Trail Effect */
    const mouseTrail = document.getElementById('mouse-trail');
    const onMouseMove = (e) => {
      if (mouseTrail) {
        const particle = document.createElement('div');
        particle.classList.add('trail-particle');
        particle.style.left = `${e.clientX}px`;
        particle.style.top = `${e.clientY}px`;
        mouseTrail.appendChild(particle);
        
        anime({
          targets: particle,
          scale: [0.5, 1.5],
          translateY: [0, anime.random(-80, 80)],
          translateX: [0, anime.random(-80, 80)],
          translateZ: anime.random(-150, 150),
          opacity: [1, 0],
          duration: 1000,
          easing: 'easeOutExpo',
          complete: function() {
            particle.remove();
          }
        });
      }
      
      const xPos = (e.clientX / window.innerWidth) - 0.5;
      const yPos = (e.clientY / window.innerHeight) - 0.5;
      document.querySelectorAll('.3d-target').forEach(el => {
        const intensity = el.classList.contains('3d-rotate-card') ? 30 : 15;
        anime({
          targets: el,
          rotateX: -yPos * intensity,
          rotateY: xPos * intensity,
          duration: 500,
          easing: 'easeOutQuad'
        });
      });
    };
    
    document.addEventListener('mousemove', onMouseMove);
    return () => document.removeEventListener('mousemove', onMouseMove);
  }, []);
}
