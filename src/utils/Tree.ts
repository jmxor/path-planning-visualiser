import TreeNode from "@/utils/TreeNode";

export default class Tree {
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

  // Returns whether the tree contains a node
  has_node(node: TreeNode) {
    return this.nodes.includes(node)
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


  step(node: TreeNode, goal: TreeNode, expansion_size: number) {
    if (node.distance(goal) <= expansion_size) {
      return new TreeNode(goal.theta0, goal.theta1)
    }

    let theta = Math.atan2(goal.theta1 - node.theta1, goal.theta0 - node.theta0)
    let theta0 = node.theta0 + expansion_size * Math.cos(theta)
    let theta1 = node.theta1 + expansion_size * Math.sin(theta)
    return new TreeNode(theta0, theta1)
  }
}