import React from 'react'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { updateUser } from '@/lib/actions';

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
import { Club } from 'lucide-react';

interface userParams {
    id: string,
    email: string,
    image: string,
    name: string
}

const handleSubmit = () => {
    console.log("the first thing")
}

const UpdateAccount = ({user}: {user : userParams}) => {

  return (
    <div className='bg-gray-300 min-h-[70vh] flex justify-center items-center '>

        <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Update your account</CardTitle>
        <CardDescription>
          Update your email or your password
        </CardDescription>
      </CardHeader>
      <CardContent>
          <form
        className="space-y-4"
        action={async (formData) => {
          "use server";
          const res = await updateUser(formData);
          if (res.success) {
            console.log(res.message);
            
            redirect("/");
          }
        }}
      >
      
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name='email'
                type="email"
                placeholder="m@example.com"
                defaultValue={user.email}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">New Password</Label>
            
              </div>
              <Input id="password" type="password" name='password'/>
              <input type="hidden" name="id" value={user.id} />

            </div>
             <Button type="submit" className="w-full">
          Update
        </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
       
      </CardFooter>
    </Card>
    </div>
  )
  
}

export default UpdateAccount