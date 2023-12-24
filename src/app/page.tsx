"use client"

import Canvas from "@/components/Canvas";
import {Tree, TreeNode} from "@/utils/Tree";

export default function Home() {
  const tree = new Tree();

  // Render Tree
  const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    tree.nodes.forEach(node => {
      ctx.moveTo(node.theta0, node.theta1)
      if (node.parent){
        ctx.lineTo(node.parent?.theta0, node.parent?.theta1)
      }
    })
    ctx.stroke()
  }

  return (
    <main>
      <h1>Path Planning Visualiser</h1>
      <Canvas draw={draw}/>
    </main>
  )
}
