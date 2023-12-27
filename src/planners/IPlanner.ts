import TreeNode from "@/utils/TreeNode";

export default interface IPlanner {
  setStart(qStart: TreeNode): void
  setGoal(qGoal: TreeNode): void
  clear(): void
  solve(timeout_ms: number): void
  nodes(): Array<TreeNode>
}