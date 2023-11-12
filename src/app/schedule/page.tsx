import TodoItem from "@/app/schedule/components/TodoItem";
import prisma from "@/db";
import Link from "next/link";
import React from "react";

const getTOdos = () => {
  return prisma.todo.findMany();
};

const toggleTodo = async (id: string, complete: boolean) => {
  "use server";
  await prisma.todo.update({ where: { id }, data: { complete } });
};

const Home = async () => {
  const todos = await getTOdos();
  // await prisma.todo.create({ data: { title: "test", complete: false } });
  return (
    <>
      <header className="flex justify-between items-center mb-4 ">
        <h1 className="text-2xl">TO-DOS</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/schedule/new"
        >
          New
        </Link>
      </header>
      <ul>
        {todos.map((todo, i) => {
          return <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />;
        })}
      </ul>
    </>
  );
};

export default Home;
