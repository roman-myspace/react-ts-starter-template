import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { AppCtx } from '../context/appContext'
import { RootState } from '../redux/store';

export default function WithoutAuthLayout() {
    
    // const { userDetails } = AppCtx();
    const userDetails = useSelector((state: RootState) => state.user.data);
  
    if(!userDetails) {              
        return <Outlet />
    } else {        
        return <Navigate to={"/"} replace={true} />
    }

}
