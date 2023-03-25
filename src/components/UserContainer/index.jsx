import React from "react";
import UserList from "../UserList";
import AddUser from "../AddUser";
import s from "./style.module.css";

export default function UserContainer() {


  return (
    <div className={s.global}>
        <AddUser/>
        <UserList/>
    </div>
  );
}
