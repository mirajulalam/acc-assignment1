const users = require("../users.json")

// get All user
module.exports.getAllUser = (req,res) =>{
    const {limit}=req.query;
    res.send(users.slice(0,limit))
};
// save A user
module.exports.saveAUser =(req,res)=>{
    users.push(req.body)
    res.send(users)
}
