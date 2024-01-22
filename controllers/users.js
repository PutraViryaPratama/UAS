const usersModel = require("../models/users_model");

async function users(req, res) {
  try {
    const result = await usersModel.users();
    res.json({ data: result });
  } catch (err) {
    console.log(err);
  }
}

async function userDetailByID(req, res) {
  const { id } = req.params;
  const result = await usersModel.usersDetailByID(id);
  if(result.length <= 0) {
    res.json({
      message: "User not found",
    });
    return;
  }
  res.json({
    message: "User found",
    data: result[0],
  });

}

async function insertByID(req, res) {
  const { id, password, email } = req.body;
  
  try {
    const result = await usersModel.insertByID(id, password, email);

    if (result.affectedRows > 0) {
      res.status(201).json({
        message: "User created successfully",
        data: {
          id,
          password,
          email,
        },
      });
    } else {
      res.json({
        message: "Failed to create user",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

async function updateByID(req, res) {
  const { id, password } = req.body;
  
  try {
    const result = await usersModel.updateByID(id, password);

    if (result.affectedRows > 0) {
      res.status(201).json({
        message: "User created successfully",
        data: {
          id,
          password,
        },
      });
    } else {
      res.json({
        message: "Failed to create user",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

module.exports = {
  users,
  userDetailByID,
  insertByID,
  updateByID,
};
