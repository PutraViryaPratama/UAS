const connection = require("../db");

async function users() {
  const [result] = await connection.execute("select * from tbl_users");
  return result;
}

async function usersDetailByID(id) {
  try {
    const [result] = await connection.execute(
      "select * from tbl_users where id =?",
      [id]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

async function insertByID(id, password, email) {
  try {
    const [result] = await connection.execute(
      "INSERT INTO tbl_users (id, password, email) VALUES (?, ?, ?)",
      [id, password, email]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

async function updateByID(id, password) {
  try {
    const [result] = await connection.execute(
      "UPDATE tbl_users SET password = ? WHERE id = ?",
      [password, id]
    );
    return result;
  } catch (error) {
    throw error;
  }
}



module.exports = {
  users,
  usersDetailByID,
  insertByID,
  updateByID,
};
