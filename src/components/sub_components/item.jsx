import React from "react";
import "./item.scss";



var Title_box = (props) => {
  var data = props.data;
  // var lenghtt = Object.keys(props).length;

  return (
    <div className="titleBox">
      <h3>{data.coinName}</h3>
      <span>{data.coinPrice} per day</span>
    </div>
  );
};

export default function item(props) {

  var data = props.data;

  return (
    <div className="itemBox">
      <div className="logo">
        <img src={`image/${data.coinIcon.url}`} className="logoIcn" alt="coin logo" />
      </div>
      <span className="version">V {data.version.v}</span>
      <Title_box data={data.coinName} />
      <Title_box data={data.coinProfit} />
      <Title_box data={data.coinTotalProfit} />
      <Title_box data={data.coinBonus} />
      <button className="buy_btn">
        Buy for {0} Ł 
      </button>
    </div>
  );
}
