const renderUsers = (rew, res) => {
  res.json({ message: "renderUsers" });
};

const renderTodos = (rew, res) => {
  res.json({ message: "renderTodos" });
};

module.exports = {
  renderUsers,
  renderTodos,
};
