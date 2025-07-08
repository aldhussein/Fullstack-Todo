import Navbar from "@/components/Navbar";
import { SignOut } from "@/components/sign-out";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Todos from "./_components/todo/Todos";
import TodoForm from "./_components/todo/TodoForm";


export const dynamic = 'force-dynamic';

const Page = async () => {
  const session = await auth();
  if (!session) redirect("/sign-in");
  const user = session.user;
  const userId  = user?.id as string;
  const userEmail = user?.email as string;
  
  
  return (

    <>
    
      <div className="bg-gray-200 flex-grow h-screen rounded-lg p-4 text-center pt-20">
        <TodoForm userId={userId}/>
        <Todos userId={userId}/>
      </div>

      
    </>
  );
};

export default Page;
