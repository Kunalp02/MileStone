import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "dat.gui";

const GalaxyScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Camera
    const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 1000);
    camera.position.x = 10;
    camera.position.y = 5;
    camera.position.z = 25;
    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Controls and user gestures
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = false;
    controls.enablePan = false;
    controls.enableZoom = false; 
    controls.enableRotate = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = -0.1;
    controls.maxPolarAngle = Math.PI / 2 - 0.1;
    controls.minPolarAngle = Math.PI / 3;
    controls.minDistance = 1;
    controls.maxDistance = 20;
    controls.enabled = false;


    // Debug
    const gui = new dat.GUI({ width: 350 });
    gui.close();

    // Galaxy
    const parameters = {
      count: 100000,
      size: 0.05,
      radius: 10,
      branches: 7,
      spin: 1,
      randomness: 1,
      randomnessPower: 3,
      innerColor: "#ff6030",
      outerColor: "#070041",
    };

    let geometry = null;
    let material = null;
    let points = null;

    const generateGalaxy = () => {
      if (points !== null) {
        geometry.dispose();
        material.dispose();
        scene.remove(points);
      }

      geometry = new THREE.BufferGeometry();

      const positions = new Float32Array(parameters.count * 3);
      const colors = new Float32Array(parameters.count * 3);

      const insideColor = new THREE.Color(parameters.innerColor);
      const outsideColor = new THREE.Color(parameters.outerColor);

      insideColor.lerp(outsideColor, 0.05);

      for (let i = 0; i < parameters.count; i++) {
        const i3 = i * 3;

        const radius = Math.random() * parameters.radius;
        const spinAngle = radius * parameters.spin;
        const branchAngle = ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

        const randomY =
          Math.pow(Math.random(), parameters.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          parameters.randomness;
        const randomX =
          Math.pow(Math.random(), parameters.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          parameters.randomness;
        const randomZ =
          Math.pow(Math.random(), parameters.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          parameters.randomness;

        positions[i3 + 0] = Math.cos(branchAngle + spinAngle) * radius + randomX;
        positions[i3 + 1] = randomY / radius;
        positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

        const mixedColor = insideColor.clone();
        mixedColor.lerp(outsideColor, radius / parameters.radius);

        colors[i3 + 0] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      material = new THREE.PointsMaterial({
        size: parameters.size,
        sizeAttenuation: true,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
      });

      points = new THREE.Points(geometry, material);
      scene.add(points);
    };

    generateGalaxy();

    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      points.rotation.y = elapsedTime * 0.1;

      controls.update();

      renderer.render(scene, camera);

      window.requestAnimationFrame(tick);
    };

    tick();

    // Clean up
    return () => {
      gui.destroy();
      geometry.dispose();
      material.dispose();
      scene.remove(points);
      renderer.dispose();
    };
  }, []);


  



  return <canvas ref={canvasRef} className="webgl"></canvas>;
};

export default GalaxyScene;
