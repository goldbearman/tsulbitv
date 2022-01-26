import React, {FC, useEffect, useState} from 'react';
import NewList from "./NewList";
import {IToDo, IUser} from "../types/types";
import ToDoItem from "./ToDoItem";
import axios from "axios";

const ToDosPage:FC = () => {
    const [todos, setToDos] = useState<IToDo[]>([]);

    console.log('ToDosPage');

    useEffect(() => {
        fetchToDos();
    }, []);


    async function fetchToDos() {
        try {
            const response = await axios.get<IToDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5');
            setToDos(response.data)
        } catch (e) {
            alert(e);
        }
    }


    return (
        <NewList items={todos} renderItem={(todo: IToDo) => <ToDoItem todo={todo} key={todo.id}/>}
        />
    );
};

export default ToDosPage;