const { Pool } = require("pg")

const bd = new Pool({
  user: "vvnzahljgpsbdy",
  host: "ec2-3-231-69-204.compute-1.amazonaws.com",
  database: "dbhrimd6dccd0v",
  password: "e2f687ef15fddd2cfef66cdc0a6b0dc1e6e8d77d6def45dabcf8c2f5ee0aabf9",
  port: 5432,
});
module.exports = bd;