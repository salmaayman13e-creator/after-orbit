import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function Planet() {
  const mesh = useRef<THREE.Mesh>(null!)
  useFrame((_, delta) => { mesh.current.rotation.y += delta * 0.055 })
  return (
    <group>
      <mesh ref={mesh}>
        <sphereGeometry args={[1.55, 96, 96]} />
        <meshStandardMaterial color="#9a7891" roughness={0.88} metalness={0.08} />
      </mesh>
      <mesh rotation={[1.22, 0.15, -0.35]}>
        <torusGeometry args={[2.15, 0.018, 8, 180]} />
        <meshBasicMaterial color="#b6a4d7" transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[1.22, 0.15, -0.35]}>
        <torusGeometry args={[2.42, 0.006, 8, 180]} />
        <meshBasicMaterial color="#7b91c9" transparent opacity={0.35} />
      </mesh>
    </group>
  )
}

export default function SpaceScene() {
  return (
    <div className="scene-canvas">
      <Canvas camera={{ position: [0, 0.2, 6.2], fov: 42 }}>
        <ambientLight intensity={0.65} />
        <directionalLight position={[-4, 3, 5]} intensity={2.4} color="#b7d4ff" />
        <pointLight position={[3, -2, -2]} intensity={3} color="#8d65d7" />
        <Stars radius={90} depth={45} count={2600} factor={3.4} saturation={0.25} fade speed={0.45} />
        <Planet />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.28} minPolarAngle={1.05} maxPolarAngle={2.1} />
      </Canvas>
    </div>
  )
}
