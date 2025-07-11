import { NextRequest, NextResponse } from "next/server";
import prisma  from "@/prisma/db"
import { auth } from "@/lib/auth";


interface Params {
    id : string
}

interface param {
    email : string
}






export async function PUT(req: NextRequest,  params: any) {
   const { id } = params as any;
  const { isDone } = await req.json();
 
   try {

 const updatedTodo = await prisma.todo.update({
    where: {
        id
    },

    data: {
        isDone : isDone
    }

   });

   

    return NextResponse.json(updatedTodo, {status: 201})
    
   } catch (error) {

    console.log("the error is",error)
     return NextResponse.json({ error: "Update failed" }, { status: 400 });
   }

}


export async function GET(req: NextRequest,   params: any) {
     const { id } = params as any;
try {
      
 const todos = await prisma.user.findUnique({
    where: {id},
    include: {
        Todos: true
    }
 })

   

    return NextResponse.json(todos, {status: 201})
    
} 
catch (error) {
    console.log("the error is  ",error)
}


}


export async function DELETE(req: NextRequest,  params: any) {
    const { id } = params as any;
   const deletedTodo = await prisma.todo.delete({
    where: {
        id
    }
    
   });

   

    return NextResponse.json(deletedTodo, {status: 201})
}




