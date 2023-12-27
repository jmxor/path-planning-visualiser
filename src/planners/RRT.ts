import Tree from "@/utils/Tree";
import TreeNode from "@/utils/TreeNode";
import IPlanner from "@/planners/IPlanner";

export default class RRT implements IPlanner{
  qStart: TreeNode
  qGoal: TreeNode

  tree: Tree

  stepSize: number
  expansionSize: number

  constructor() {
    this.qStart = new TreeNode(25, 25)
    this.qGoal = new TreeNode(275, 125)

    this.stepSize = 0.05
    this.expansionSize = 10

    this.tree = new Tree()
  }

  setStart(qStart: TreeNode) {
    this.qStart = qStart
  }

  setGoal(qGoal: TreeNode) {
    this.qGoal = qGoal
  }

  clear() {
    this.tree = new Tree()
  }

  solve(timeoutMS: number = 5000) {
    this.tree.add_node(this.qStart)

    const timeout = Date.now() + timeoutMS
    while (Date.now() < timeout) {
      // Expand randomly
      let theta0 = Math.floor(Math.random() * 300) // x
      let theta1 = Math.floor(Math.random() * 150) // y
      const qRand = new TreeNode(theta0, theta1)
      const qNear = this.tree.nearest(qRand)
      const qNew = this.tree.step(qNear, qRand, this.expansionSize)

      // TODO: add collision checking
      // Add new node to tree
      qNew.parent = qNear
      this.tree.add_node(qNew)

      // Check if goal has been reached
      if (qNew.distance(this.qGoal) <= this.expansionSize) {
        this.qGoal.parent = qNew
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