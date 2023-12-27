import Tree from "@/utils/Tree";
import TreeNode from "@/utils/TreeNode";

export default class RRTPlanner {
  qStart: TreeNode
  qGoal: TreeNode

  tree: Tree

  step_size: number
  expansion_size: number

  constructor() {
    this.qStart = new TreeNode(25, 25)
    this.qGoal = new TreeNode(275, 125)

    this.step_size = 0.05
    this.expansion_size = 10

    this.tree = new Tree()
  }

  setStart(qStart: TreeNode) {
    this.qStart = qStart
  }

  setGoal(qGoal: TreeNode) {
    this.qGoal = qGoal
  }

  solve(timeout_ms: number = 5000) {
    this.tree = new Tree()
    this.tree.add_node(this.qStart)

    const timeout = Date.now() + timeout_ms
    while (Date.now() < timeout) {
      // Expand randomly
      let theta0 = Math.floor(Math.random() * 300) // x
      let theta1 = Math.floor(Math.random() * 150) // y
      const q_rand = new TreeNode(theta0, theta1)
      const q_near = this.tree.nearest(q_rand)
      const q_new = this.tree.step(q_near, q_rand, this.expansion_size)

      // TODO: add collision checking
      // Add new node to tree
      q_new.parent = q_near
      this.tree.add_node(q_new)

      // Check if goal has been reached
      if (q_new.distance(this.qGoal) <= this.expansion_size) {
        this.qGoal.parent = q_new
        this.tree.add_node(this.qGoal)
        return true
      }
    }

    return false
  }

  nodes() {
    return this.tree.nodes
  }
}