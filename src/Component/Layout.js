import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
export default function Layout(props) {
  return (
   <>
   <Navbar title="TransformText" mode={props.mode} togglemode={props.togglemode}/>
   <Outlet/>
   </>
  )
}
