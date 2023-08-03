import React, { useEffect, useState } from 'react'
import "../userdisplay/styles.css"
import {UserCard} from "../usercard"
import { Link } from 'react-router-dom'
import axios from 'axios'
 
export const UserDetails = ({userDetails, deleteUser}) => {

  return (
    <div className="user-details-main">
      <div className="user-details-inner">
        {
            userDetails?.map((user, idx) => (
                <UserCard 
                name={user.name}
                email={user.email}
                favouriteFood={user.favouriteFood}
                id={user.id}
                key={idx}
                deleteUser={() => deleteUser(user.id)}
                />
            ))
        }
      </div>
    </div>
  );
}

