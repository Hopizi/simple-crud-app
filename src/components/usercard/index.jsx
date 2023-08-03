import React from 'react'
import "./styles.css"
import {Delete, Edit} from "../../assets"
import { Link } from 'react-router-dom'
import axios from 'axios'

export const UserCard = ({name, email, favouriteFood, id, deleteUser}) => {

  return (
    <div className="card-main-container">
      <div className="inner-card-main-container">
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{favouriteFood}</p>
        <div className="icons-containaer">
          <Delete className="user-card-icons delete" onClick={deleteUser}/>
          <Link to={`/edit-users-details/${id}`}>
            <Edit className="user-card-icons edit" />
          </Link>
        </div>
      </div>
    </div>
  );
}
