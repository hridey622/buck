import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame, Canvas } from '@react-three/fiber';
import { Mesh, RawShaderMaterial } from 'three';

const fragmentShader = `
  precision highp float;
  uniform vec2 resolution;
  uniform float time;
  uniform float xScale;
  uniform float yScale;
  uniform float distortion;

  void main() {
    vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

    float d = length(p) * distortion;

    float rx = p.x * (1.0 + d);
    float gx = p.x;
    float bx = p.x * (1.0 - d);
    float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
    float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
    float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);

    gl_FragColor = vec4(r, g, b, 1.0);
  }
`;

const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

function AnimationMesh() {
  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<RawShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      resolution: { value: [window.innerWidth, window.innerHeight] },
      time: { value: 0.0 },
      xScale: { value: 1.0 },
      yScale: { value: 0.5 },
      distortion: { value: 0.05 },
    }),
    []
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value += 0.01;
    }
  });

  const geometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      -1.0, -1.0, 0.0,
       1.0, -1.0, 0.0,
      -1.0,  1.0, 0.0,
       1.0, -1.0, 0.0,
      -1.0,  1.0, 0.0,
       1.0,  1.0, 0.0,
    ]);
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    return geometry;
  }, []);

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <rawShaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

const BackgroundAnimation = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas
        camera={{
          position: [0, 0, 1],
          left: -1,
          right: 1,
          top: 1,
          bottom: -1,
          near: 0,
          far: 1000
        }}
      >
        <AnimationMesh />
      </Canvas>
    </div>
  );
};

export default BackgroundAnimation;