import DbConnect from "@/app/utils/DbConnect";
import User from "@/app/models/User"
import { NextResponse } from "next/server";

DbConnect()

export async function POST(req){
    let {name,email,password} =  await req.json();
    let userData = new User({name,email,password})
    try{
        await userData.save();
        return NextResponse.json({userData,"msg":"User login"})
    }catch(e){
        throw NextResponse.json({"msg":"Something went wrong."})
    }
}