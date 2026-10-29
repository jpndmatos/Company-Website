"use client";
import React, { useRef, Suspense } from "react";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Canvas, useFrame} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ModelCapitel from "@/public/capitelmodel/CapitelLow";


export default function Landing() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
    ref={ref}
    id="Home"
    className="landing">
      <div className="landing-inner">
        <div className="landing-grid">
          <div className="landing-content">
            <h1 className="h1 mb-2" data-aos="fade-up">Cultural heritage, in 3D</h1>
            <p className="text-2xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="200">3D recording, virtual reconstruction and interactive experiences for cultural heritage.</p>
            <div className="model-viewer" role="img" aria-label="Interactive 3D scan of a carved architectural capital" data-aos="fade-up" data-aos-delay="600">
              <Canvas frameloop="demand">
                <Suspense fallback={null}>
                  <OrbitControls
                    enableDamping={true}
                    dampingFactor={0.1}
                    enableRotate={true}
                    enableZoom={false}
                    enablePan={false}
                    maxDistance={5}
                  />
                  <ambientLight intensity={1.5} />
                  <directionalLight position={[10, 10, 5]} intensity={2.5} />
                  <ModelCapitel />
                </Suspense>
              </Canvas>
            </div>
            <div className="flex rounded-full flex-col items-center justify-center pt-8 md:pt-12" data-aos="fade-up">
              <Link
                href="#About"
                className="primary-link" data-aos="fade-up" data-aos-delay="1000" data-aos-anchor-placement="top-bottom"
                onClick={() => {
                  setActiveSection("About");
                  setTimeOfLastClick(Date.now());
                }}
                >
                About the company
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
