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
}