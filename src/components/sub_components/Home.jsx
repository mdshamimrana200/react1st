import "./Home.scss";
import React from "react";
import Sub_links from './social.jsx';
import Login from './user/login.jsx';


// image load from path
import Myimage from "../../assets/IMAGE/logo.png";
import login from "./user/login.jsx";

export default function Home(props) {
  var head_Title = props.h1;
  return (
    <div className="Home">
      <div className="logo_shado"></div>
      <div className="container flex">



            <img src={Myimage} alt="logo" className="logo" />
            <h1 className="head_Title">{head_Title}</h1>

            <p className="para">

            {props.p}
           
            </p>



            {props.Social}
            {props.Login}
            

      </div>
    </div>
  );
}
