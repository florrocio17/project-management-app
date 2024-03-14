import { useState, useRef } from "react"
import Modal from "./Modal";

export default function NewTask ({onAdd}) {
    const [enteredTask, setEnteredTask] = useState('');
    const modal = useRef();

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        if (enteredTask.trim() === '') {
            modal.current.open()
            return;
        }
        onAdd(enteredTask);
        setEnteredTask(' ')
    }
    return (
        <>
        <Modal ref={modal}>
            <h2 className='text-xl font-bold text-stone-700 my-4'>Input Empty</h2>
            <p className='text-stone-600 mb-4'>Oops... looks like you forgot to enter a value.</p>
            <p className='text-stone-600 mb-4'>Please make sure you provide a valid value.</p>
        </Modal>
        <div className="flex items-center gap-4">
     {/*we do not use the Input component because we do not need a label */} 
            <input type="text" 
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            onChange={handleChange}
            value={enteredTask}
            /> 
            <button className="text-teal-700 hover:text-teal-950"
            onClick={handleClick}>+ Add Task</button>
        </div>
        </>
    )
}