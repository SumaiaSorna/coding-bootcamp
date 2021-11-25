const getAllUsers = (req, res) => {
  res.json({ message: "getAllUsers" });
};

const getUserById = (req, res) => {
  res.json({ message: "getUserById" });
};

module.exports = { getAllUsers, getUserById };
