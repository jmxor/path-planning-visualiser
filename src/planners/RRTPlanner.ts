import Tree from "@/utils/Tree";
import TreeNode from "@/utils/TreeNode";

export default class RRTPlanner {
  start: TreeNode
  goal: TreeNode

  tree: Tree

  step_size: number
  expansion_size: number

  constructor(q_start: TreeNode, q_goal: TreeNode) {
    this.start = q_start
    this.goal = q_goal

    this.step_size = 0.05
    this.expansion_size = 10

    this.tree = new Tree()
  }

  solve(timeout_ms: number = 5000) {
    this.tree.add_node(this.start)

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
      if (q_new.distance(this.goal) <= this.expansion_size) {
        this.goal.parent = q_new
        this.tree.add_node(this.goal)
        return true
      }
    }

    return false
  }
}