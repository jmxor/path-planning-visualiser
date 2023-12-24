export class TreeNode {
  theta0: number;
  theta1: number;
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
}


export class Tree {
  nodes: TreeNode[]

  constructor() {
    this.nodes = [];
  }

  // Add a new node to the tree
  add_node(node: TreeNode) {
    this.nodes.push(node)
  }

  // Add several new nodes to the tree
  add_nodes(...nodes: TreeNode[]) {
    nodes.forEach(node => this.add_node(node))
  }

  // Returns whether the tree contains a node at the same point
  has_node(node: TreeNode) {
    return this.nodes.some(node.equals)
  }
}