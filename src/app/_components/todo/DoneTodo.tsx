"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import { API_URL } from '@/lib/congfig';


const DoneTodo = ({todoId, isDone} : {todoId: string, isDone : boolean}) => {
   const router = useRouter();
   
    const handleDone = async () => {
         try {
      
        const newStatus = !isDone;

        const res = await fetch(`${API_URL}/todo/${todoId}`, {
            method: "PUT",
            body : JSON.stringify({isDone: newStatus})
        });

        
        router.refresh();
        
     } catch (error) {
        console.log("the error is ", error)
     }

    }


  return (
    <button 
    onClick={handleDone}
    className='border border-gray-300 p-1 rounded-l-md font-semibold'>
        {isDone ? "unDone" : "Done"}
    </button>
  )
}

export default DoneTodo