import TreeNode from "@/utils/TreeNode";

test('Test node equality', () => {
  let node1 = new TreeNode(0,0)
  let node2 = new TreeNode(0,0)

  expect(node1.equals(node2)).toBe(true)
})

test('Test node distance', () => {
  let node1 = new TreeNode(0,3)
  let node2 = new TreeNode(4,0)

  expect(node1.distance(node2)).toBe(5)
})
