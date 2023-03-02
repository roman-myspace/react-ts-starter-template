import React, { useEffect, useState } from 'react'
import { baseRequest } from "../utils/axios";
import { useDispatch } from 'react-redux';
import { logout } from "../redux/slices/userSlice";
export default function Profile() {
  
  let dispatch = useDispatch();

  const [data, setData] = useState(null);

  const getPosts = async () => {


    let res = await baseRequest.get("https://jsonplaceholder.typicode.com/posts");
    if(res.status == 200) {
      setData(res.data);
      console.log("data ==>> ", res.data);
    }
  }

  useEffect(() => {
    getPosts();
  },[]);

  const logoutUser = () => {
    dispatch(logout());
  }

  return (
    <div>
      Profile
      <button onClick={logoutUser}>logout</button>  
    </div>
  )
}
