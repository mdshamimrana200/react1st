import "./Affiliate.scss";
import Nav from "../../sub_components/navbar";
import Home from "../../sub_components/Home";
import Fotter from "../../sub_components/footer";
import React from "react";
import Socile from "../../sub_components/social";
import Box from "../../sub_components/box";

export default function Affiliate() {
  return (
    <div>

      <Home
        Login={""}
        Social={<Socile />}
        h1="Affiliate Program"
        p="Invite your friends and get 2% each time they upgrade SCM Demo."
      />
      <div className="show box">
        <div className="container">
          <Box title="Upgrade to Premium" div={(<div><p>You can also <a href="#">Upgrade Mining</a> to increase affiliate rate 2%.</p><p>SCM Demo is an industry leading LitecoinTest mining pool. All of the mining power is backed up by physical miners. Mining with the latest algorithms allows to make as much LitecoinTest as possible. We aim to provide you with the easiest possible way to make money without having to do any of the hard stuff.</p><p>With data centers around the globe, we aim to keep bills down and mining power high, meaning you can make more in a shorter amount of time than what it would take to mine from your home for instance. Our data centers are located in Europe, USA and China with dedicated Up-Links and 99% uptime!</p></div>)}/>
        </div>
      </div>

    </div>
  );
}
