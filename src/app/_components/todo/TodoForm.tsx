"use client";
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React from 'react'
import { API_URL } from '@/lib/congfig';


const TodoForm = ({userId}: {userId : string}) => {
 const router = useRouter(); 


    const handleSubmit = async (event: React.FormEvent) => {

        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const data = {
            title : formData.get("title"),
            userId: userId
        }

     try {
      


        const res = await fetch(`${API_URL}/todo`, {
            method: "POST",
            body : JSON.stringify(data)
        });

        form.reset();
        router.refresh();
        
     } catch (error) {
        console.log("the error is ", error)
     }
    }

  return (
    <div className='w-full'>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="title" 
              className='text-xl font-bold'>Title</Label>
              <Input
                name='title'
                type="text"
                placeholder="Enter your todo"
                required
              />
            </div>
          </div>
        </form>

    </div>
  )
}

export default TodoForm