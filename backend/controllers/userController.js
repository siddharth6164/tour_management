import User from "../models/User.js";

export const createUser = async (req, res) => {
    const newUser = new User(req.body)
    try{
        const savedUser = await newUser.save()
        res.status(200).json({success:true,message:"Successfully created",data:savedUser})
    }catch(err){
        res.status(500).json({success:false,message:"Falied to create. Try again "})
    }
}

export const updateUser = async (req, res) => {
    const id = req.params.id
    try {
        const updateUser = await User.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.status(200).json({success:true,message:"Successfully update",data:updateUser})
    } catch (error) {
        res.status(500).json({success:false,message:"Falied to update"})
    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        await User.findByIdAndDelete(id)
        res.status(200).json({success:true,message:"Successfully deleted"})
    } catch (error) {
        res.status(500).json({success:false,message:"Falied to deleted"})
    }
}

export const getSingleUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findById(id)
        res.status(200).json({success:true,message:"Successfully find",data:user})
    } catch (error) {
        res.status(500).json({success:false,message:"not found"})
    }
}
//get All User
export const getAllUser = async (req, res) => {
    try {
        //how many show data in one page
        const users = await User.find({})
        res.status(200).json({success:true,message:"Successfully",data:users})
    } catch (error) {
        res.status(404).json({success:false,message:"Not found"})
    }
}