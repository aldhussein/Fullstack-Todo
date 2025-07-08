"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import { API_URL } from '@/lib/congfig';

const DeleteTodo = ({todoId} : {todoId: string}) => {
   const router = useRouter();
   
    const handleDone = async () => {
         try {
      
 

        const res = await fetch(`${API_URL}/todo/${todoId}`, {
            method: "DELETE",
        });

        
        router.refresh();
        
     } catch (error) {
        console.log("the error is ", error)
     }

    }


  return (
    <button 
    onClick={handleDone}
    className='border border-gray-300 p-1 rounded-l-md font-semibold text-rose-600'>
       Delete
    </button>
  )
}

export default DeleteTodo