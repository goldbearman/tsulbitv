import React from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";

const App = () => {
    const users: IUser[]=[
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
            },
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
            },
        },
    ];
    return (
        <div>
            <Card onClick={(num)=>console.log(num)} width='400px' height='400px' variant={CardVariant.outline}>
                <button>Кнопка</button>
            </Card>
            <UserList users={users}/>
        </div>
    );
};

export default App;