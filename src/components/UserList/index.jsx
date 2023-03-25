import React from 'react'
import s from "./style.module.css";
import { useSelector } from 'react-redux'
import User from '../User';

export default function UserList() {

    const users = useSelector(state => state)

    const manUsers = users.filter((user) => user.gender === "man");
    const womanUsers = users.filter((user) => user.gender === "woman");
  
  return (
    <div>
        {manUsers[0] && (
        <div className={s.manContainer}>
          <h3>Мужчины</h3>
        <div className={s.userItemContainer}>
          {manUsers.map((user) => (
            <User key={user._id} {...user} />
          ))}
        </div>
        </div>
      )}
      {womanUsers[0] && (
        <div className={s.womanContainer}>
          <h3>Девушки</h3>
        <div className={s.userItemContainer}>
          {womanUsers.map((user) => (
            <User key={user._id} {...user} />
          ))}
        </div>
        </div>
      )}
    </div>
  )
}
