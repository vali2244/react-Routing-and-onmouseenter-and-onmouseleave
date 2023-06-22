import { BrowserRouter,Routes,Route } from "react-router-dom"
import Head from "./compounds/Head/head"
import Home from "./compounds/main/Home/Home"
import About from "./compounds/main/About/About"
import Login from "./compounds/main/Login/Login"
import Contact from "./compounds/main/Contact/Contact"
import Users from "./compounds/main/Users/Users"




const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Head/>
    <Routes>
    <Route path="/"element={<Home/>}/>
    <Route path="/about"element={<About/>}/>
    <Route path="/login"element={<Login/>}/>
    <Route path='/contact'element={<Contact/>}/>
    <Route path ="/users"element={<Users/>}/>
    
    
    </Routes>
    
    </BrowserRouter>
    </>
    )
  }
  
  export default Routing