import Tree from "@/utils/Tree";
import TreeNode from "@/utils/TreeNode";

test('Test adding one nodes', () => {
  let tree = new Tree()
  let node = new TreeNode(0,0)
  tree.addNode(node)
  expect(tree.nodes[0]).toEqual(node)
})

test('Test adding multiple nodes', () => {
  let tree = new Tree()
  let node1 = new TreeNode(0,0)
  let node2 = new TreeNode(0,1)
  let node3 = new TreeNode(0,2)
  tree.addNodes(node1, node2, node3)
  expect(tree.nodes.length).toBe(3)
})
