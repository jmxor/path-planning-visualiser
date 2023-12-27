"use client"

import Canvas from "@/components/Canvas";
import TreeNode from "@/utils/TreeNode";
import RRT from "@/planners/RRT";
import {useEffect, useState} from "react";

export default function Home() {
  const [qStart, setQStart] = useState(new TreeNode(25, 25))
  const [qGoal, setQGoal] = useState(new TreeNode(275, 125))
  const [planner, setPlanner] = useState(new RRT())
  const [nodes, setNodes] = useState<Array<TreeNode>>([])

  const plan = () => {
    planner.clear()
    planner.setStart(qStart)
    planner.setGoal(qGoal)
    planner.solve()
    setNodes(planner.nodes())
  }

  useEffect(() => {
    plan()
  }, []);

  // Render Tree
  const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    ctx.fillStyle = '#000000'
    ctx.beginPath()
    nodes.forEach(node => {
      ctx.moveTo(node.theta0, node.theta1)
      if (node.parent) {
        ctx.lineTo(node.parent?.theta0, node.parent?.theta1)
      }
    })
    ctx.stroke()

    // Draw start node
    ctx.beginPath()
    ctx.fillStyle = '#00AA00'
    ctx.arc(qStart.theta0, qStart.theta1, 3, 0, 2 * Math.PI)
    ctx.fill()

    // Draw goal node
    ctx.beginPath()
    ctx.fillStyle = '#AA0000'
    ctx.arc(qGoal.theta0, qGoal.theta1, 3, 0, 2 * Math.PI)
    ctx.fill()
  }

  return (
    <main>
      <h1>Path Planning Visualiser</h1>
      <Canvas draw={draw}/>
      <button onClick={plan}>Plan</button>
    </main>
  )
}
