import React from 'react'
import { auth } from '@/lib/auth';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { todo } from 'node:test';
import Todo from './Todo';
import { API_URL } from '@/lib/congfig';


export interface TodoItem {
    id : string,
    title: string,
    isDone: boolean,
    userId : string
}

const Todos = async ({userId}: {userId: string}) => {

  const session = await auth();

  const Useremail = await session?.user?.email as string;
 
  
    
    const res = await fetch(`${API_URL}/todo/${userId}`,{cache: "no-store"});
    console.log(res)
    const data : any = await res.json();
    const todos : TodoItem[] = data.Todos;

  return (
    <div>
       <Card className='py-5 border-none divide-y divide-gray-300'>
  <CardHeader>
  <div className='flex justify-between items-center mb-3'>
      <CardTitle>Todos</CardTitle>
    <CardTitle>Todo Action</CardTitle>
  </div>
  </CardHeader>
  <CardContent>
     <ul className='divide-y divide-gray-200 space-y-6'>
        {todos.map(todo => (
            <Todo todo={todo} key={todo.id}/>
        ))}
     </ul>
  </CardContent>

</Card>
    </div>
  )
}

export default Todos