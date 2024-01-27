"use server";

import prisma from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTodo(data: FormData) {
  const title = data.get("title")?.valueOf(); //as per name passed and check if null or empty
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }
  await prisma.todo.create({ data: { title, complete: false } });
  revalidatePath("/schedule");
  redirect("/schedule")
}

export async function deleteTodo(id: string) {
  if (!id) {
    throw new Error("Invalid Id");
  }
  const todo = await prisma.todo.findUnique({
    where: {
      id: id,
    },
  });
  if (!todo) {
    throw new Error("Not found");
  } else {
    await prisma.todo.delete({ where: { id: id } });
    revalidatePath("/schedule")
    redirect("/schedule");
  }
}
