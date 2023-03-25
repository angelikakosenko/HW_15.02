import React from 'react'
import { useDispatch } from 'react-redux';
import s from "./style.module.css";

export default function AddUser() {


  const dispatch = useDispatch();


  const onSubmmit = event => {
    event.preventDefault();

    const {name, gender, imageLink} = event.target;

    dispatch({type: 'ADD', payload: {
        id: Date.now(), 
        name: name.value, 
        gender: gender.value, 
        imageLink: imageLink.value
    }});

    name.value = '';
    gender.value = '';
    imageLink.value = '';
  }

  return (
    <form className={s.addUserForm} onSubmit={onSubmmit}>
      <input type="text" name="name" placeholder='Имя'/>
      <input type="text" name="imageLink" placeholder='Ссылка на аватарку'/>
      <select type="url" name="gender" required>
        <option value=''>Пол</option>
        <option value="man">Мужчина</option>
        <option value="woman">Девушка</option>
      </select>
      <button>Добавить</button>
    </form>
  )
}
