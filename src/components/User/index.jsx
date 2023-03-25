import React from 'react'
import s from "./style.module.css";

export default function User({name, imageLink}) {
  return (
    <div >
        <div className={s.userItem}>
            <img src={imageLink} alt="#" />
            <p>{name}</p>
        </div>
    </div>
  )
}
