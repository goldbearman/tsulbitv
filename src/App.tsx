import React, {useState, useEffect} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IToDo, IUser} from "./types/types";
import axios from "axios";
import List from "./components/List";
import NewList from "./components/NewList";
import UserItem from "./components/UserItem";
import ToDoItem from "./components/ToDoItem";
import EventExample from "./components/EventExample";

import {Routes, Route, NavLink} from 'react-router-dom'
import UsersPage from "./components/UsersPage";
import ToDosPage from "./components/ToDosPage";

const App = () => {

    console.log('App')
    return (
        <div>
            <div>
                <NavLink to='/users'>Пользователь</NavLink>
                <NavLink to='/todos'>Список дел</NavLink>
            </div>
            <Routes>
                <Route path={'/users'} element={<UsersPage/>}/>
                <Route path={'/todos'} element={<ToDosPage/>}/>
            </Routes>
        </div>
    );
};

export default App;