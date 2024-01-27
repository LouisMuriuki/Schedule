"use client"
import { deleteTodo } from "@/Actions/schedule";
import React,{useEffect} from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
interface TodoItemProps {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
}
const TodoItem = ({ id, title, complete, toggleTodo }: TodoItemProps) => {

  console.log("complete",complete)
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label htmlFor={id} className="cursor-pointer peer-checked:line-through">
        {title}
      </label>
      {complete && (
        <div>
          <MdOutlineDeleteOutline
            size={22}
            className="ml-5 hover:cursor-pointer"
            onClick={()=>deleteTodo(id)}
          />
        </div>
      ) }
    </li>
  );
};

export default TodoItem;
