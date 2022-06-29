import React from 'react';
import style from './InputBox.module.css';

const InputBox = ({type, id}) => {
    return <input type={type} id={id} className={style.input_box}/>
}

export default InputBox;