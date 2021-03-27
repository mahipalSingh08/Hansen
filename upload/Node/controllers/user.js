const userSchema = require('./../models/userModel');

module.exports = {
    async addUser(req, res, next){
        try{
            const user = new userSchema({
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                email : req.body.email,
                phone : req.body.phone,
                imagePath : req.body.imagePath
            });
            let data = await user.save();
            return res.status(200).json(data);
        }catch(error){
            return res.status(401).json(error);
        }

    },
    async getUserById(req, res, next){
        try{
            let data = await userSchema.find({id : req.params.id});
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
        try{
            let _id = req.body.id;
            const user = {
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                email : req.body.email,
                phone : req.body.phone,
                imagePath : req.body.imagePath
            };
            let data = await user.updateOne({_id: _id}, user);
            return res.status(200).json(data);
        }catch(error){
            return res.status(401).json(error);

        }

    },
    async deleteUser(req, res, next){
        try{
            let data = await user.remove({ _id: req.body.id });
        }catch(error){
            return res.status(401).json(error);
        }

    }

}