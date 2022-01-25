import React, {useState, useEffect} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IToDo, IUser} from "./types/types";
import axios from "axios";
import List from "./components/List";
import NewList from "./components/NewList";
import UserItem from "./components/UserItem";
import ToDoItem from "./components/ToDoItem";

const App = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [todos, setToDos] = useState<IToDo[]>([]);

    useEffect(() => {
        fetchUsers();
        fetchToDos();
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data)
        } catch (e) {
            alert(e);
        }
    }

    async function fetchToDos() {
        try {
            const response = await axios.get<IToDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5');
            setToDos(response.data)
        } catch (e) {
            alert(e);
        }
    }


    return (
        <div>
            <Card onClick={(num) => console.log(num)} width='400px' height='400px' variant={CardVariant.outlined}>
                <button>Кнопка</button>
            </Card>
            <NewList items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
            />
            <NewList items={todos} renderItem={(todo: IToDo) => <ToDoItem todo={todo} key={todo.id}/>}
            />
        </div>
    );
};

export default App;