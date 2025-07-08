import React from 'react'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation';
   import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import UpdateAccount from '../_components/Account/UpdateAccount';



export const dynamic = 'force-dynamic';
const AccountPage = async () => {
 const session = await auth();
 const user : any = session?.user;

 if(!session){
    // return <div className='h-screen flex justify-center items-center '>
    //     <h1 className='text-3xl text-red-800 font-bold'>come back and login  try again</h1>
    // </div>
    redirect("/")
 }

  return (
     <UpdateAccount user={user}/>
  )
}

export default AccountPage
