import { NextRequest, NextResponse } from "next/server";
import db from "@/prisma/db";

export async function POST(req : NextRequest) {
    
  const body = await req.json();
  
  const {name, email, message} = body

 const data = await db.contact.create({
    data: {
        name: name,
        email: email,
        message: message
    }
 })

 
  return NextResponse.json(data, {status : 201})

}