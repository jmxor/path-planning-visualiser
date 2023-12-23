export class TreeNode {
  theta0: number;
  theta1: number;
  parent: TreeNode | undefined

  constructor(theta0: number, theta1: number, parent?: TreeNode) {
    this.theta0 = theta0
    this.theta1 = theta1

    this.parent = parent
  }
}


export class Tree {
  nodes: Map<[number, number], TreeNode>;

  constructor() {
    this.nodes = new Map();
  }

  add_node(node: TreeNode) {
    const coords: [number, number] = [node.theta0, node.theta1]
    this.nodes.set(coords, node)
  }
}