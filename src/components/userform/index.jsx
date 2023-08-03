import React, { useEffect, useState } from 'react'
import "./styles.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserDetails } from '../userdisplay';

export const UserForm = () => {

  const [userInput, setUserInput] = useState({
    id: '',
    name: '',
    email: '',
    favouriteFood: '',
  })
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    function getAllUsers() {
      axios
        .get("http://localhost:3000/users")
        .then((response) => {
          setUserDetails(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getAllUsers();
    console.log("Hi");
  }, []);

  function deleteUser(id) {
    axios
      .delete(`http://localhost:3000/users/${id}`)
      .then((response) => {
        console.log("User Deleted Succesfully !");
        setUserDetails(userDetails.filter((item) => item.id !== id));
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function addUserDetails() {

    const id = userInput.id ? parseInt(userInput.id) + 1 : 1;

    setUserInput((prevState) => ({
      ...prevState,
      id: id,
    }));

    axios.post("http://localhost:3000/users", userInput)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        setUserDetails([...userDetails, response.data])
      } else {
        console.log("Post Unsucessful will code", response.status)
      }
    });
  }

  return (
    <div className="user-files-main">
      <div className="main-form-action-provider">
        <div className="inner-form-action">
          <h1>User Form</h1>
          <div className="inputs-form">
            <input placeholder="Enter Your Name" className="inputs" name='name' onChange={handleChange}/>
            <input placeholder="Enter your Email" className="inputs" name='email'onChange={handleChange}/>
            <input placeholder="Enter Favourite Food" className="inputs" name='favouriteFood' onChange={handleChange}/>
            <div className="btn-container-submit">
              <button onClick={addUserDetails}>Submit Details</button>
            </div>
          </div>
        </div>
      </div>
    <UserDetails 
    userDetails={userDetails}
    deleteUser={deleteUser}
    />
    </div>
  );
}

