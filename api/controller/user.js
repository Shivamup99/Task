const User = require('../model/user')

exports.getUser = async(req,res)=>{
    try {
        let user = await User.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.getUserID = async(req,res)=>{
    try {
        let user = await User.findById({_id:req.params._id})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.postUser = async(req,res)=>{
    let user = await User.findOne({email:req.body.email})
    if(user) return res.status(422).json('user allready registerd')
    try {
        let user = new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            address:req.body.address,
            mobile:req.body.mobile,
            image:req.file.path,
            profession:req.body.profession
        })
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.putUser = async(req,res)=>{
    try {
        let user = await User.findByIdAndUpdate(req.params._id,{
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            address:req.body.address,
            mobile:req.body.mobile,
            image:req.file.path,
            profession:req.body.profession
        },{new:true})
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


exports.deleteUser = async(req,res)=>{
    try {
        let user = await User.findByIdAndDelete({_id:req.params._id})
        if(user){
            res.status(200).json({message:'User deleted'})
        } else{
            res.status(400).json({message:'User not found'})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}