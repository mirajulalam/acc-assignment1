const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const usersRoutes = require('./routes/users.route.js')

app.use(cors());
app.use(express.json());


app.use("/user",usersRoutes)

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.all("*",(req,res)=>{
    res.send("No route found!")
})
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});