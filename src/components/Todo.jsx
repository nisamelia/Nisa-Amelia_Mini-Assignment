import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'
import add_icon from '../assets/add.png'
import DatePicker from './DatePicker'

const Todo = () => {

    // add text into todo list
    const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

    const inputRef = useRef();

    const [date, setDate] = useState("")

    const [showPopUp, setShowPopUp] = useState(false);

    const [filter, setFilter] = useState("all");

    const add = () => {
        const inputText = inputRef.current.value.trim();

        if (inputText === "" || !date) {
            return alert("Please input task and date!");
        }

        const newTodo = {
            id: Date.now(),
            text: inputText,
            date: date.format("YYYY-MM-DD HH:mm"),
            isComplete: false,
        }
        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = "";
        setDate("")
    }

    // delete function
    const deleteTodo = (id) => {
        setTodoList((previousTodos) => {
            return previousTodos.filter((todo) => todo.id !== id)
        })
    }



    //toggle
    const toggle = (id) => {
        setTodoList((previousTodos) => {
            return previousTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isComplete: !todo.isComplete }
                }
                return todo;
            })
        })
    }

    useEffect(() => {
        // console.log(todoList);
        localStorage.setItem("todos", JSON.stringify(todoList));
    }, [todoList])

    // Filtering list
    const filteredTodos = todoList.filter(todo => {
        if (filter === "completed") return todo.isComplete;
        if (filter === "incomplete") return !todo.isComplete;
        return true; // all
    });

    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl relative'>

            {/* title */}
            <div className="flex items-center mt-7 gap-2">
                <img className='w-8' src={todo_icon}></img>
                <h1 className='text-3xl font-semibold'>To-Do List</h1>
            </div>

            {/* input box
        <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type='text' placeholder='Add your task'></input>
            
        </div> */}

            {/* filter buttons */}
            <div className="flex gap-2 my-4">
                <button
                    className={`px-3 py-1 rounded-full ${filter === "all" ? "bg-purple-600 text-white" : "bg-gray-200"}`}
                    onClick={() => setFilter("all")}
                >
                    All
                </button>
                <button
                    className={`px-3 py-1 rounded-full ${filter === "completed" ? "bg-purple-600 text-white" : "bg-gray-200"}`}
                    onClick={() => setFilter("completed")}
                >
                    Completed
                </button>
                <button
                    className={`px-3 py-1 rounded-full ${filter === "incomplete" ? "bg-purple-600 text-white" : "bg-gray-200"}`}
                    onClick={() => setFilter("incomplete")}
                >
                    Incomplete
                </button>
            </div>

            {/* todo list */}
            <div>
                {filteredTodos.map((item, index) => {
                    return <TodoItems key={index} text={item.text} date={item.date} id={item.id}
                        isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
                })}
            </div>

            {/* floating button */}
            <button onClick={() => setShowPopUp(true)} className='absolute bottom-4 right-4 border-none justify-center cursor-pointer'>
                <img className='w-14' src={add_icon} alt="" />
            </button>
            {
                showPopUp && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
                        <div className='bg-white rounded-xl shadow-xl p-6 w-96'>
                            <h2 className='text-xl font-bold mb-4'>New Task</h2>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                add();
                                setShowPopUp(false);
                            }}>
                                <input ref={inputRef} type='text' placeholder='Task Name' className='w-full mb-3 p-2 border rounded-xl' />
                                <DatePicker value={date} onChange={setDate} />
                                <button type='button' onClick={() => setShowPopUp(false)} className="px-4 py-2 bg-gray-300 rounded-xl hover:bg-gray-400">Cancel</button>
                                <button className="px-4 py-2 bg-purple-700 text-white rounded-xl hover:bg-blue-600 ml-2">Save</button>
                            </form>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Todo