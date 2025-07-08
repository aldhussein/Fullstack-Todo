
import { NextRequest, NextResponse } from "next/server";
import prisma  from "@/prisma/db"
import { auth } from "@/lib/auth";
import getServerSession from "next-auth"

interface Params {
    email : string
}

export async function POST(req: NextRequest) {
    
 
try {


    const body = await req.json();
      
    const newTodo = await prisma.todo.create({
       data: {
         title: body.title,
        isDone: body.isDone,
        userId: body.userId
       }
    });


    return NextResponse.json(newTodo, {status: 201})

} catch (error) {
    console.log("the error is ",error)
}
}





// export async function GET(req: NextRequest) {
    
// try {
    
//     const todos = await prisma.todo.findMany();


//     return NextResponse.json(todos)
// } catch (error) {
//     console.log("the error is", error)
// }

// }