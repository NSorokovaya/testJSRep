var invertTree = function (root) {
  if (root === null) {
    return null;
  }
  let left = root.left;
  root.left = root.right;
  root.right = left;
  invertTree(root.left);
  invertTree(root.right);

  return root;
};
