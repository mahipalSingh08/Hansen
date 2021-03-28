const userSchema = require('./../models/userModel');
const multer = require('multer');
const path = require('path');


module.exports = {
    async addUser(req, res, next){
        console.log("add user called", req.body);
        const url = req.protocol + "://" + req.get("host");
        let imagePath = url + "/api/user/images/" + req.file.filename;
        try{
            const user = new userSchema({
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                email : req.body.email,
                phone : req.body.phone,
                imagePath: imagePath
            });
            let data = await user.save();
            return res.status(200).json(data);
        }catch(error){
            return res.status(401).json(error);
        }

    },
    async getUserById(req, res, next){
        try{
            let data = await userSchema.find({_id : req.params.id});
            return res.status(200).json(data);
        }catch(error){
            return res.status(401).json(error);
        }

    },
    async getUsers(req, res, next){
        try{
            let data = await userSchema.find();
            return res.status(200).json(data);
        }catch(error){
            return res.status(401).json(error);

        }

    },
    async updateUser(req, res, next){
        console.log("updateUser", req);
        const url = req.protocol + "://" + req.get("host");
        let imagePath = url + "/api/user/images/" + req.file.filename;
        try{
            const user = {
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                email : req.body.email,
                phone : req.body.phone,
                imagePath : imagePath
            };
            console.log(user);
            //imagePath: req.file.filename
           // userSchema.updateOne({_id: req.body._id}, user);
            let data = await userSchema.updateOne({_id: req.body._id}, user)

            return res.status(200).json(data);
        }catch(error){
            return res.status(401).json(error);

        }

    },
    async deleteUser(req, res, next){
        console.log("getUsers", req.query.id);
        try{
            let data = await userSchema.remove({ _id: req.query.id });
            return res.status(200).json(data);
        }catch(error){
            return res.status(401).json(error);
        }

    }

}