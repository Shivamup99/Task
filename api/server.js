const express = require('express')
const port = process.env.PORT || 3001
const connection = require('./model/db')
connection();
const cors = require('cors')
const user = require('./routes/user')
const app = express();

app.use(express.json());
app.use(cors());
app.use('/',user)
app.use("/upload", express.static("upload"));

app.listen(port,()=>{
    console.log(`server is connected ${port}`)
})