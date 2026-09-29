import { success } from "zod";
import { registorUserService,loginUserService } from "../services/user-auth.service.js";

export const registorUser = async (req, res) => {
    try {
        const userData = req.body;
        if (!userData) {
            res.status(400).json({

                success: false,
                message: "Bad Request"

            })
        }
        const data = await registorUserService(userData)
        res.status(201).json({ success: true, data: data })
    } catch (err) {
        console.error(err.message)
        res.status(500).json({
            success: false,
            message: err.message

        })
    }
}

export const loginUser= async (req,res)=>{
    try{
    const data=req.body
    const token=await loginUserService(data);
    if(!token){
        throw new Error("Token not Found")
    }
    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })
    res.status(200).json({
        success:true,
        message:"Login successful",
        token:token
    })
    }
    catch(err){
        console.error(err.message)
        res.status(500).json({
            success: false,
            message: err.message

        })
    }
}