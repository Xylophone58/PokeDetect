const mysql = require('mysql2');

// Create a connection pool (recommended for performance)
const pool = mysql.createPool({
  host: process.env.DB_HOST,      // Your RDS endpoint (e.g., pokemon-db.cbgjh0kjbfgq.us-east-1.rds.amazonaws.com)
  user: process.env.DB_USER,      // Your RDS username (e.g., admin)
  password: process.env.DB_PASS,  // Your RDS password
  database: process.env.DB_NAME,  // Your database name (e.g., pokemon)
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;