
import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
// import Alert from './Component/Alert';
// import About from './Component/About';
// import Layout from './Component/Layout';
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'



function App() {
  const [alert,SetAlert] = useState(null);
  const ShowAlert=(message,type)=>{
    SetAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      SetAlert(null);
    },2000 );
  }

  const [mode,Setmode] = useState('dark');
  const togglemode=()=>{
    if(mode=== 'light'){
      Setmode("dark")
      document.body.style.backgroundColor='#0d1b3b'
    }
    else{
      Setmode("light")
      document.body.style.backgroundColor='white'
    }
  }


  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='/' element={<Layout mode={mode} togglemode={togglemode} />}>
  //       <Route path='' element={<TextForm mode={mode} ShowAlert={ShowAlert} alert={alert}/>} />
  //       <Route path='about' element={<About mode={mode}/> } />
  //     </Route>
  //   )
  // )




  return (
  <>
    
    <Navbar title="TransformText" mode={mode} togglemode={togglemode} />
    {/* <Alert Alert={alert}/> */}
    <TextForm mode={mode} ShowAlert={ShowAlert}  alert={alert}/>
    {/* <About mode={mode}/> */}
    
    {/* <RouterProvider router={router} /> */}
    {/* <Alert Alert={alert}/> */}
  </>

  );
}

export default App;
