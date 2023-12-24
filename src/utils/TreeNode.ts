export default class TreeNode {
  theta0: number
  theta1: number
  parent: TreeNode | undefined

  constructor(theta0: number, theta1: number, parent?: TreeNode) {
    this.theta0 = theta0
    this.theta1 = theta1

    this.parent = parent
  }

  // Returns whether a given node has the same position
  equals(node: TreeNode) {
    return this.theta0 == node.theta0 && this.theta1 == node.theta0
  }

  // Return the Euclidean distance between two nodes
  distance(node: TreeNode) {
    return ((this.theta0 - node.theta0) ** 2 + (this.theta1 - node.theta1) ** 2) ** 0.5
  }
}