import React from "react";
import "./Payout.scss";
import Table from "react-bootstrap/Table";
import Data from '../../../assets/data/tableData.json';
import Home from "../../sub_components/Home";
import Socile from "../../sub_components/social";


export default function PayOuts() {
  return (
    <div>
      <Home
        Login={""}
        Social={<Socile />}
        h1="Start earning now"
        p="We are experts in the field of trading and investment of LitecoinTest, and we're want to share our best practice with EVERYONE! LitecoinTest market capitalization growing everyday. Don't miss your chance to earn on this wave. Join our team now!"
      />
      <div className="container flex">
        <div className="alerttt text-center">
          Estimated total payouts of 3.73375115 LTCT since launch date!
        </div>
        <h1>
            10 Last payment
        </h1>

        <Table className="text-center" striped bordered hover>
          <thead>
            <tr>
              <th>DATE </th>
              <th>Amount</th>
              <th>Address</th>
              <th>TXID</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((v,i)=><tr>
              <td>{v.DATE}</td>
              <td className="TBcolor">{v.Amount}</td>
              <td>{v.Address}</td>
              <td className="TBcolor">{v.TXID}</td>
            </tr>)}
            
          </tbody>
        </Table>
        <h1>
            10 Last payment
        </h1>

        <Table className="text-center" striped bordered hover>
          <thead>
            <tr>
              <th>DATE </th>
              <th>Amount</th>
              <th>Address</th>
              <th>TXID</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((v,i)=><tr>
              <td>{v.DATE}</td>
              <td className="TBcolor">{v.Amount}</td>
              <td>{v.Address}</td>
              <td className="TBcolor">{v.TXID}</td>
            </tr>)}
            
          </tbody>
        </Table>
      </div>
    </div>
  );
}
