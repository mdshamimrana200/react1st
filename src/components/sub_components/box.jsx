import React from "react";
import "./box.scss";

export default function box(props) {
  return (
    <div className="faq_item">
      <h2>{props.title}</h2>
      {props.div}
    </div>
  );
}
