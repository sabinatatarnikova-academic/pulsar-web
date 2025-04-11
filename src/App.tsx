import React from 'react';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import { Navigate, Route, Routes } from "react-router";
import UsersPage from "./dashboard/UsersPage";
import {dataUser0, dataUser1, dataUser2, dataUser3, dataUser4, dataUser5} from "./dashboard/data/data";

function App() {
  return (
      <Routes>
        <Route path={"/dashboard"} element={<Dashboard data={dataUser0}/>}/>
        <Route path={"/"} element={<Navigate to={"/dashboard"}/>}/>
        <Route path={"/users"} element={<UsersPage/>}/>
        <Route path={"/users/1"} element={<Dashboard data={dataUser1}/>}/>
        <Route path={"/users/2"} element={<Dashboard data={dataUser2}/>}/>
        <Route path={"/users/3"} element={<Dashboard data={dataUser3}/>}/>
        <Route path={"/users/4"} element={<Dashboard data={dataUser4}/>}/>
        <Route path={"/users/5"} element={<Dashboard data={dataUser5}/>}/>
      </Routes>
  );
}

export default App;
