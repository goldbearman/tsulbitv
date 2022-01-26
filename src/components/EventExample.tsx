import React, {FC, useRef, useState} from 'react';

const EventExample:FC = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const clickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
    }

    return (
        <div>
            <input placeholder='Управляемый' type="text" value={value} onChange={changeHandler}/>
            <input ref={inputRef} placeholder='Неуправляемый' type="text"/>
            <button onClick={clickHandler}>button</button>
        </div>
    );
};

export default EventExample;