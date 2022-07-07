import React from 'react';
import style from './InputBox.module.css';

const InputBox = ({type, id, onValueChange, placeholder}) => {

    return <input type={type} id={id} className={style.input_box} onChange={onValueChange} placeholder={placeholder}/>
}

export default InputBox;