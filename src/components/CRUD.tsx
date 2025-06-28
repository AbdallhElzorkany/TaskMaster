"use client";
import { useState, useEffect, FormEvent } from "react";
import { supabase } from "@/utils/supabase/client";
import Link from "next/link";
type task = {
  id: number;
  name: string;
  description: string;
  create_at: string;
};
export default function CRUD() {
  const [newTask, setNewTask] = useState({
    name: "",
    description: "",
  });
  const [tasks, setTasks] = useState<task[]>([]);
  const [description, setDescription] = useState("");
  const handelSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTask.name || !newTask.description) return;
    const { error } = await supabase.from("tasks").insert(newTask).single();
    if (error) {
      console.error(error);
      return;
    }
    setNewTask({ name: "", description: "" });
    selectTasks();
  };
  const selectTasks = async () => {
    const { error, data } = await supabase
      .from("tasks")
      .select("*")
      .order("created_at", { ascending: true });
    if (error) {
      console.error(error);
      return;
    }
    setTasks(data);
  };

  const deleteTask = async (id: number) => {
    const { error } = await supabase.from("tasks").delete().eq("id", id);
    if (error) {
      console.error(error);
      return;
    }
    selectTasks();
  };

  const updateTask = async (id: number) => {
    if (!description) return;
    const { error } = await supabase
      .from("tasks")
      .update({ description: description })
      .eq("id", id);
    if (error) {
      console.error(error);
      return;
    }
    setDescription("");
    selectTasks();
  };

  useEffect(() => {
    selectTasks();
  }, []);
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Task Manager CRUD
      </h1>
      <Link href="/auth/signin">Sign In</Link>
      <Link href="/auth/signup">Sign Up</Link>
      {/* Form to add a new task */}
      <form
        onSubmit={handelSubmit}
        className="bg-gray-50 rounded-lg shadow-sm p-6 mb-8"
      >
        <div className="mb-4">
          <label
            htmlFor="taskTitle"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Task Title
          </label>
          <input
            id="taskTitle"
            value={newTask.name}
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Enter task title"
            onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="taskDescription"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="taskDescription"
            value={newTask.description}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-h-[100px]"
            placeholder="Enter task description"
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
          />
        </div>

        {/* <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Task Image
          </label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
        </div> */}

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Add Task
        </button>
      </form>

      {/* List of Tasks */}
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {task.name}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{task.description}</p>

              {/* {task.image_url && (
                <div className="mb-4 rounded-md overflow-hidden">
                  <img 
                    src={task.image_url} 
                    alt={task.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
              )} */}

              <div className="mt-4 pt-4 border-t border-gray-100">
                <textarea
                  className="w-full px-4 py-2 border border-gray-200 rounded-md mb-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-h-[80px]"
                  placeholder="Update description..."
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
                <div className="flex space-x-3">
                  <button
                    onClick={() => updateTask(task.id)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
