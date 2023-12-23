"use client"

import Canvas from "@/components/Canvas";

export default function Home() {
  const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {

  }

  return (
    <main>
      <h1>Path Planning Visualiser</h1>
      <Canvas draw={draw}/>
    </main>
  )
}
