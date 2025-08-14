import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'
import edit_icon from '../assets/edit.png'

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle, date}) => {
  return (
    <div className="flex items-center justify-between my-3 gap-2">
      {/* Kiri: Icon + Teks */}
      <div
        onClick={() => toggle(id)}
        className="flex items-center flex-1 cursor-pointer gap-4"
      >
        {/* Icon toggle */}
        <img
          src={isComplete ? tick : not_tick}
          alt="status"
          className="w-7 flex-shrink-0"
        />

        {/* Teks + Due Date */}
        <div className="flex flex-col">
          <span
            className={`text-slate-700 text-[17px] decoration-slate-500 ${
              isComplete ? "line-through" : ""
            }`}
          >
            {text}
          </span>
          <span className="text-sm text-gray-500">
            Due to: {date}
          </span>
        </div>
      </div>

      {/* Edit Icon
            <img
        onClick={() => editTodo(id)}
        src={edit_icon}
        alt="delete"
        className="w-3.5 cursor-pointer"
      /> */}

      {/* Delete Icon */}
            <img
        onClick={() => deleteTodo(id)}
        src={delete_icon}
        alt="delete"
        className="w-3.5 cursor-pointer"
      />

    </div>
  )
}

export default TodoItems
