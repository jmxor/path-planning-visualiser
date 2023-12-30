import TreeNode from "@/utils/TreeNode";

export default class Tree {
  nodes: TreeNode[]

  constructor() {
    this.nodes = [];
  }

  // Add a new node to the tree
  addNode(node: TreeNode) {
    this.nodes.push(node)
  }

  // Add several new nodes to the tree
  addNodes(...nodes: TreeNode[]) {
    nodes.forEach(node => this.addNode(node))
  }

  // Return the closest node in the tree
  nearest(node: TreeNode) {
    let nearest_node = this.nodes[0]
    let dist = Infinity

    this.nodes.forEach(curr_node => {
      let curr_dist = node.distance(curr_node)
      if (curr_dist < dist) {
        nearest_node = curr_node
        dist = curr_dist
      }
    })

    return nearest_node
  }

  // Returns a new node
  step(node: TreeNode, goal: TreeNode, expansionSize: number) {
    if (node.distance(goal) <= expansionSize) {
      return new TreeNode(goal.theta0, goal.theta1)
    }

    let theta = Math.atan2(goal.theta1 - node.theta1, goal.theta0 - node.theta0)
    let theta0 = node.theta0 + expansionSize * Math.cos(theta)
    let theta1 = node.theta1 + expansionSize * Math.sin(theta)
    return new TreeNode(theta0, theta1)
  }

  // Returns the neighbours within a radius of a node
  neighbours(node: TreeNode, expansionSize: number) {
    return this.nodes.filter((n) => node.distance(n) <= expansionSize)
  }

  // Returns the path from leaf node to root
  branch(node: TreeNode) {
    const branch = [node];
    while (node.parent != undefined) {
      node = node.parent
      branch.push(node)
    }
    return branch
  }
}