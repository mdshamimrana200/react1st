import React from "react";
import "./HomePage.scss";

// add data from assest/data.json
import data from "../../../assets/data/coinData.json";
// add component-0-------------------


import Home from "../../sub_components/Home";
import Item from "../../sub_components/item.jsx";

import Social from "../../sub_components/social";
// import Social from "../../sub_components/social.jsx";
import Login from "../../sub_components/user/login.jsx";
// import image from './assets/IMAGE/items_icon/1.png'
// add item use for condition
var Items = [];
for (var i = 0; i < data.length; i++) {
  Items.push(<Item data={data[i]} />);
}

// simple components=================================
var Simple = (props) => {
  var { title, value } = props;
  return (
    <div className="itemmsComponent">
      <h3>{title}</h3>
      <span>{value}</span>
    </div>
  );
};
// simple components=================================end

export default function Home_page() {
  return (
    <div className="flex_center">


      <Home
        Login={<Login />}
        Social={<Social />}
        h1="Reliable online wallet for LitecoinTest"
        p="It's very easy: your mining equipment launches after registration.
            Once you have set up your account, you can start earning your first
            coins from our LitecoinTest cloud mining service!"
      />

      <div className="first_section">
        <div className="container flex">
          <h1>Find your Mining Plan</h1>
          <p>
            Cloud mining is greatly suited for novice miners who would like to
            try out mining and earning cryptocurrency; as well as seasoned
            miners who don't want the hassle or risks spent on home mining
            equipment maintenance.
          </p>
        </div>
      </div>

      <div className="second_section">
        <div className="container">
          <div className="boxess">{Items}</div>
        </div>
      </div>

      <div className="Statistics">
        <div className="container">
          <h1>Statistics</h1>
          <div className="itemsss">
            {/* USE COMPONENT */}

            <Simple title="713" value="Total User" />
            <Simple title="3000000Ł " value="Total Investments" />
            <Simple title="3000000Ł " value="Total Paid" />
            <Simple title="2026" value="Online Days" />

            <button className="payment">SEE PAYMENT PROFS</button>
          </div>
        </div>
      </div>


    </div>
  );
}
