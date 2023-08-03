import React, { useEffect, useState, } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import "./styles.css"
import axios from 'axios';

export const EditUser = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [editDetails, setEditDetails] = useState({
        name: '',
        email: '',
        favouriteFood: ''
    });

    useEffect(() => {
        function getAllUsers() {
          axios
            .get(`http://localhost:3000/users/${id}`)
            .then((response) => {
              console.log(response.data);
              const data = response.data;
              setEditDetails({
                name: data.name,
                email: data.email,
                favouriteFood: data.favouriteFood,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
        getAllUsers();
    }, [])

    const handleInputChange = (event) => {
       const { name, value } = event.target;
       setEditDetails((prevState) => ({
         ...prevState,
         [name]: value,
       }));
     };

     function updateUserDetails() {
        axios.put(`http://localhost:3000/users/${id}`, editDetails)
        .then((response) => {
            if(response.status >= 200 && response.status < 300) {
                console.log("Edit Successful")
                navigate(-1)
            } else {
                console.log("Edit Failed", response.status)
            }
        }).catch(err => {
            console.log(err)
        });
     }

  return (
    <div className="edit-user-details">
      <div className="inner-edit-details">
        <div className="inner-form-action">
          <h1>Edit User Details</h1>
          <div className="inputs-form">
            <input placeholder="Enter Your Name" name='name' className="inputs" value={editDetails?.name}  onChange={handleInputChange}/>
            <input placeholder="Enter your Email" name='email' className="inputs"  value={editDetails?.email} onChange={handleInputChange}/>
            <input placeholder="Enter Favourite Food" name='favouriteFood' className="inputs" value={editDetails?.favouriteFood} onChange={handleInputChange}/>
            <div className="btn-container-submit">
              <button onClick={updateUserDetails}>Edit User Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}