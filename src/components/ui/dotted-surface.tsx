"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function DottedSurface({ className }: { className?: string }) {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }

    const SEPARATION = 100;
    const AMOUNTX = 60;
    const AMOUNTY = 80;
    const isDark = theme === "dark";

    const scene = new THREE.Scene();
    const bgColor = isDark ? 0x0a0e17 : 0xf8fafc;
    scene.fog = new THREE.Fog(bgColor, 2000, 10000);

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 355, 1220);

    const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(bgColor, 1);
    containerRef.current.appendChild(renderer.domElement);

    const positions: number[] = [];
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions.push(
          ix * SEPARATION - (AMOUNTX * SEPARATION) / 2,
          0,
          iy * SEPARATION - (AMOUNTY * SEPARATION) / 2
        );
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));

    const count = positions.length / 3;
    const colors = new Float32Array(positions.length);
    const dotColor = isDark ? [180, 190, 210] : [20, 30, 50];
    for (let i = 0; i < count; i++) {
      colors[i * 3] = dotColor[0] / 255;
      colors[i * 3 + 1] = dotColor[1] / 255;
      colors[i * 3 + 2] = dotColor[2] / 255;
    }
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 14,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let count2 = 0;
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const pos = geometry.attributes.position;
      const array = pos.array as Float32Array;
      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          array[i * 3 + 1] =
            Math.sin((ix + count2) * 0.3) * 50 +
            Math.sin((iy + count2) * 0.5) * 50;
          i++;
        }
      }
      pos.needsUpdate = true;
      renderer.render(scene, camera);
      count2 += 0.1;
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 -z-10 pointer-events-none ${className ?? ""}`}
    />
  );
}
