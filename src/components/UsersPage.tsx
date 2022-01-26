import React, {FC, useEffect, useState} from 'react';
import {IToDo, IUser} from "../types/types";
import axios from "axios";
import Card from "./Card";
import NewList from "./NewList";
import UserItem from "./UserItem";

const UsersPage:FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [todos, setToDos] = useState<IToDo[]>([]);

    console.log('UsersPage')

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data)
        } catch (e) {
            alert(e);
        }
    }


    return (
        <NewList items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
        />
    );
};

export default UsersPage;