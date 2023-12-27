"use client"

import Canvas from "@/components/Canvas";
import TreeNode from "@/utils/TreeNode";
import RRTPlanner from "@/planners/RRTPlanner";

export default function Home() {
  const q_start = new TreeNode(25, 25)
  const q_goal = new TreeNode(275, 125)
  const planner = new RRTPlanner(q_start, q_goal);
  planner.solve()

  // Render Tree
  const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    ctx.fillStyle = '#000000'
    ctx.beginPath()
    planner.tree.nodes.forEach(node => {
      ctx.moveTo(node.theta0, node.theta1)
      if (node.parent) {
        ctx.lineTo(node.parent?.theta0, node.parent?.theta1)
      }
    })
    ctx.stroke()

    // Draw start node
    ctx.beginPath()
    ctx.fillStyle = '#00AA00'
    ctx.arc(q_start.theta0, q_start.theta1, 3, 0, 2 * Math.PI)
    ctx.fill()

    // Draw goal node
    ctx.beginPath()
    ctx.fillStyle = '#AA0000'
    ctx.arc(q_goal.theta0, q_goal.theta1, 3, 0, 2 * Math.PI)
    ctx.fill()
  }

  return (
    <main>
      <h1>Path Planning Visualiser</h1>
      <Canvas draw={draw}/>
    </main>
  )
}
