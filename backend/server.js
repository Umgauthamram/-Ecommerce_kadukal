require("dotenv").config();

const connectDatabase = require('./db/Database.js')
const app = require("./app.js")
const PORT = process.env.PORT;

const server = app.listen(PORT,async()=>{
  connectDatabase();
  console.log(`The server is running on Port:${PORT} URL: http://localhost:${PORT}`);
});