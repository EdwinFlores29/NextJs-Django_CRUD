"use client"
import {useState} from "react";

function FormTask() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="bg-slate-200 p-7">
            <form action="">
                <h1 className="text-black font-bold">Añadir Tarea</h1>

                <label htmlFor="title" className="text-xs text-black">Title:</label>

                <input type="title" className="bg-slate-400 rounded-b-md mb-2 p-2 w-full block text-slate-900"
                       onChange={(e) => setTitle(e.target.value)}/>

                <label htmlFor="title" className="text-xs text-black">Description:</label>

                <textarea name="description" className="bg-slate-400 rounded-b-md mb-2 p-2 w-full block text-slate-900"
                onChange={(e) => setDescription(e.target.value)}></textarea>

                <button className="bg-indigo-500 text-white p-2 block w-full">SAVE</button>
            </form>
        </div>
    )
}

export default FormTask;