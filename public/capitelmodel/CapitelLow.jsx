import React from "react";
import { useGLTF } from "@react-three/drei";

export default function ModelCapitel(props) {
  const { nodes } = useGLTF("/capitelmodel/Capitel_low.gltf");
  const capital = nodes.Capitel_low_retro;
  return <mesh {...props} geometry={capital.geometry} material={capital.material} scale={22} rotation={[96, 0, 4]} />;
}
useGLTF.preload("/capitelmodel/Capitel_low.gltf");
