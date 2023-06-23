import DbConnect from "@/app/utils/DbConnect";
import {NextResponse } from "next/server";
import News from "@/app/models/Post"

DbConnect();

export async function GET(req){
    let data= await News.find({});
    return NextResponse.json({data});
}

export async function POST(req){
    let records = await req.json();
    let newPost = new News(records)
    newPost = await newPost.save();
    
    return NextResponse.json({
        "msg":"data inserted SUccessfully",
        "data":newPost
    })
}