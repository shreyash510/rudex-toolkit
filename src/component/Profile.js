import React from 'react';
import {useSelector} from 'react-redux'

function Profile () {
  const user = useSelector((state)=>state.user.value);
  // console.log(user)
  return (
    <>
        <h1>Profile page</h1>
        <p>Name : {user.name}</p>
        <p>Age : {user.age}</p>
        <p>Email {user.email}:</p>
    </>
  )
}

export default Profile