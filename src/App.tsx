import React, {useState, useEffect} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";

const App = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    
    useEffect(() => {
        fetchUsers();
      }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data)
        }catch (e) {
            alert(e);
        }
    }


    
    return (
        <div>
            <Card onClick={(num)=>console.log(num)} width='400px' height='400px' variant={CardVariant.outline}>
                <button>Кнопка</button>
            </Card>
            <List items={users} renderItem={(user:IUser) => <UserItem user={user} key={user.id}/>}
                />
        </div>
    );
};

export default App;