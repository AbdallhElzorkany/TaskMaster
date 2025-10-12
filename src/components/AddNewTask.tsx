"use client";
import { useState, useActionState } from "react";
import { addTask, FormState } from "@/lib/addTask";
import { LoaderCircle, CalendarPlus } from "lucide-react";

interface data {
  id: string;
  fullname: string;
}
export default function AddNewTask({ data }: { data: data[] }) {
  const initialState: FormState = {
    errors: {
      message: "",
    },
  };
  const [task, setTask] = useState({
    title: "",
    description: "",
    due_date: "",
    assignee: "",
  });
  const [formError, setFormError] = useState({
    title: true,
    description: true,
    due_date: true,
    assignee: true,
  });
  function validateTitle() {
    console.log(task.title);
    if (task.title === "") {
      setFormError({
        ...formError,
        title: true,
      });
    } else {
      setFormError({
        ...formError,
        title: false,
      });
    }
  }
  function validateDescription() {
    console.log(task.description);
    if (task.description === "") {
      setFormError({
        ...formError,
        description: true,
      });
    } else {
      setFormError({
        ...formError,
        description: false,
      });
    }
  }
  function validateDueDate() {
    console.log(task.due_date);
    if (task.due_date === "") {
      setFormError({
        ...formError,
        due_date: true,
      });
    } else {
      setFormError({
        ...formError,
        due_date: false,
      });
    }
  }
  function validateAssignee() {
    console.log(task.assignee);
    if (task.assignee === "") {
      setFormError({
        ...formError,
        assignee: true,
      });
    } else {
      setFormError({
        ...formError,
        assignee: false,
      });
    }
  }
  const [state, formAction, isPending] = useActionState(addTask, initialState);
  return (
    <div className="px-5">
      <p
        className={` p-2 text-lg rounded-lg mb-5 text-center ${
          state.errors.message ? "text-red-600 bg-red-200" : "text-white"
        }`}
      >
        {state.errors.message || "place holder"}
      </p>
      <form action={formAction} className="flex flex-col gap-y-10">
        <div>
          <div>
            <label
              htmlFor="fullname"
              className="text-md font-semibold text-gray-600 mb-1"
            >
              Title <span className="text-red-600">*</span>
            </label>
            <input
              id="title"
              type="text"
              onChange={(e) => {
                setTask({ ...task, title: e.target.value });
              }}
              onBlur={validateTitle}
              value={task.title}
              name="title"
              className="w-full bg-gray-100 px-4 py-2 rounded border border-gray-300 text-black "
              placeholder="Enter Task Title..."
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="text-md font-semibold text-gray-600 mb-1"
            >
              Description <span className="text-red-600">*</span>
            </label>
            <textarea
              id="description"
              onChange={(e) => {
                setTask({ ...task, description: e.target.value });
              }}
              onBlur={validateDescription}
              rows={4}
              value={task.description}
              name="description"
              className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-black w-full"
              placeholder="Enter Task Description..."
            />
          </div>
          <div className="grid grid-cols-2 not-md:grid-cols-1   gap-x-10">
            <div>
              <label
                htmlFor="due_date"
                className="text-md font-semibold text-gray-600 mb-1"
              >
                Due Date <span className="text-red-600">*</span>
              </label>
              <input
                id="due_date"
                type="date"
                onChange={(e) => {
                  setTask({ ...task, due_date: e.target.value });
                }}
                onBlur={validateDueDate}
                defaultValue={task.due_date}
                name="due_date"
                className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-black w-full"
              />
            </div>
            <div>
              <label
                htmlFor="assign_to"
                className="text-md font-semibold text-gray-600 mb-1"
              >
                Assign To <span className="text-red-600">*</span>
              </label>
              <select
                id="assign_to"
                onChange={(e) => {
                  setTask({ ...task, assignee: e.target.value });
                }}
                onBlur={validateAssignee}
                value={task.assignee}
                name="assignee"
                className="bg-gray-100 px-4 py-2 rounded border border-gray-300 text-black w-full"
              >
                <option value="" disabled>
                  Select Employee
                </option>
                {data.map((assignee) => (
                  <option key={assignee.id} value={assignee.id}>
                    {assignee.fullname}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <button
          disabled={
            isPending ||
            formError.assignee ||
            formError.description ||
            formError.title ||
            formError.due_date
          }
          type="submit"
          className="w-full hover:bg-blue-800 cursor-pointer bg-blue-700 flex items-center px-4 py-2 justify-center rounded-lg not-md:p-2 not-md:text-sm text-white text-lg font-semibold"
        >
          {isPending ? (
            <LoaderCircle className="mr-2 animate-spin" />
          ) : (
            <CalendarPlus className="mr-2" />
          )}
          Add New Task
        </button>
      </form>
    </div>
  );
}
