const res = require("express");
const users = require("../users.json")

// get one random user
module.exports.getRandomUser = (req,res) =>{
    const chosenPath = users[Math.floor(Math.random() * (users.length))]; 
    res.send(chosenPath)
};
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
// update a user
module.exports.updateUser =(req,res)=>{
    const {id }=req.params;

    const newData = users.find(user=> user.id == id);
    newData.id = id;
    newData.gender = req.body.gender;
    newData.name = req.body.name;
    newData.contact = req.body.contact;
    newData.address = req.body.address;
    newData.photoUrl = req.body.photoUrl;

    res.send(newData)
}
// update all user
module.exports.updateAllUser =(req,res)=>{
    const {id }=req.body;

    const newInfo = users.find(user=> user.id == id);
    newInfo.id = id;
    newInfo.gender = req.body.gender;
    newInfo.name = req.body.name;
    newInfo.contact = req.body.contact;
    newInfo.address = req.body.address;
    newInfo.photoUrl = req.body.photoUrl;

    res.send(newInfo)
}
// delete a user
module.exports.deleteUser =(req,res)=>{
    const {id}= req.params;
    const deleteUser = users.filter(user => user.id !== Number(id));
    res.send(deleteUser)
}
