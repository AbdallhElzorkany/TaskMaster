"use client";
import { useState, useActionState } from "react";
import { editTask, FormState } from "@/lib/editTask";
import { LoaderCircle, Save } from "lucide-react";
import { format } from "date-fns/fp";
export type Task = {
  id: string;
  title: string;
  description: string;
  due_date: string;
};
export default function EditTask({ taskObj }: { taskObj: Task }) {
  const initialState: FormState = {
    errors: {
      message: "",
    },
  };
  const [task, setTask] = useState({
    title: taskObj.title,
    description: taskObj.description,
    due_date: format("yyyy-MM-dd", taskObj.due_date),
  });

  const [formError, setFormError] = useState({
    title: true,
    description: true,
    due_date: true,
  });
  function validateTitle() {
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
  const [state, formAction, isPending] = useActionState(editTask, initialState);
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
        <input type="hidden" name="id" value={taskObj.id} />{" "}
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
          <div>
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
          </div>
        </div>
        <button
          disabled={
            isPending ||
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
            <Save className="mr-2" />
          )}
          Update
        </button>
      </form>
    </div>
  );
}
