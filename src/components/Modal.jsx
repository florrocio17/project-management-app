import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from "react-dom"
import Button from './Button';

const Modal = forwardRef(function Modal({children}, ref) {
    const dialog = useRef();
    // to make it reusable, to expose a function that can be called from outside this component function,
    //we must use useImperativeHandle.
    useImperativeHandle((ref), () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return createPortal(
        <dialog ref={dialog} className='backdrop:bg-teal-900/90 p-4 rounded-md shadow-md'>
            {children}
            <form method="dialog" className='mt-4 text-right'>
                <Button>Close</Button>
            </form>
        </dialog>, document.getElementById('modal-root'))
}) 

export default Modal;