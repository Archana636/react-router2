import React from "react";
import './style.css';
import { BrowserRouter, Link, Route, Switch,useHistory, Redirect } from "react-router-dom";
import { useState } from "react";


import Home from './Home';
import About from './About';
import NotFound from './NotFound';
// import Posts from './Posts';
import profile from './profile';
import Post from './Post';


export default function App() {
  const [login,setLogin] = useState(false);
    return (
    <div>
      
      <BrowserRouter>
      <ul className="nav">
      <li>
      <Link to="/home">Home</Link>
      </li>
      <li>
       <Link to="/about">About</Link>
      </li>
      <li>
      <Link to="/profile">profile</Link>
      </li>
      </ul>

      <button onClick={() => setLogin(!login)}>{login ? "log out" : "login"}</button>
      
      <Switch>
   
<Route path="/" component={Home}exact  />
<Route path="/About" component={About} />
<Route path="/profile" component={profile} />
<Route path="/Posts/:id" component={Post}/>
<Route path="/profile" >
{login ? <profile /> : <Redirect to="/" />}

</Route>
<Route path="/Posts/:id" component={Post}/>
<Route  component={NotFound}/>

 </Switch>
 
      </BrowserRouter>
 </div>
   
  );
}
