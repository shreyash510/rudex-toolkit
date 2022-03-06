import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../Features/user'

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => {
        dispatch(login({ name: "shreyash", age: 21, email: 'shreyashkolhe2001@gmail.com' }))
      }}>Login</button>

      <button onClick={() => {
        dispatch(logout())
      }}>LogOut</button>
    </div>
  )
}

export default Login
