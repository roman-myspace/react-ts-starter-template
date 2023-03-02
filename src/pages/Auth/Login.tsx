import React from 'react'
import { useDispatch } from 'react-redux'
import { setUserDetails } from '../../redux/slices/userSlice';

export default function Login() {

  const dispatch = useDispatch();

  const loginUser = () => {
    let data = {
      name: "user name",
      email: "mail@mail.com"
  }
    dispatch(setUserDetails({
      data,
      token: "234n209234lsdf8sdf9gdflkzxcsdf0"
    }));
  }

  return (
    <div>
      Login
      <button onClick={loginUser}>login user</button>
    </div>
  )
}
