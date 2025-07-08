import { schema } from "@/lib/schema";
import db from "@/prisma/db";
import { executeAction } from "@/lib/executeAction";
import hash from 'bcryptjs'
import bcrypt from "bcryptjs";

const signUp = async (formData: FormData) => {
  return executeAction({
    actionFn: async () => {
      const email = formData.get("email") as any;
      const password = formData.get("password") as any;
      // const validatedData = schema.parse({ email, password });

           
      


      await db.user.create({
        data: {
          email: email,
          password: password,
        },
      });
    },
    successMessage: "Signed up successfully",
  });
};


const updateUser = async (formData: FormData) => {
  try {
     const id = formData.get("id") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      return { success: false, message: "Email or password missing" };
    }


    await db.user.update({
      where: { id },
      data: {
        email: email,
        password: password
      },
    });

    return { success: true, message: "User updated successfully" };
  } catch (error) {
    console.error("Update failed:", error);
    return { success: false, message: "Something went wrong" };
  }
};

export { signUp, updateUser};
