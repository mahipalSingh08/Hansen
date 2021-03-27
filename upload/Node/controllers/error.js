module.exports = {
    error(req, res, next){
            return res.status(404).json({error: "not found"});
    }
}