// dbConfig.js
const mysql = require('mysql')
const pool  = mysql.createPool({
  host            : 'database-1.cljz9kcrcgq9.us-east-1.rds.amazonaws.com',
  user            : 'admin',
  password        : 'abcdefgh',
  database        : 'poc',
  port            : 3306,
  ssl             : true
})

module.exports = pool