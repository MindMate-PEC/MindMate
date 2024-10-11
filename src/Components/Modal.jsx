import classes from './Modal.module.css'

function Modal (props) {
    return (
        <>
            <div className={classes.backdrop} onClick={props.changeModal} />
            <dialog open className={classes.modal} onClick={(e) => e.stopPropagation()}>
                {props.children}
            </dialog>
        </>
    );
}

export default Modal;
