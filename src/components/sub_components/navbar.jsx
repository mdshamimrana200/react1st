import { NavLink } from "react-router-dom";
import "./navbar.scss";




             




var navbar = () => {
  return (
    <div>
      <div className="navBar">
        <ul className="navlist">
        <NavLink to='/react1st' className="style" >Home</NavLink>
                <NavLink to='/Affiliate' className="style" >Affiliate Program</NavLink>
                <NavLink to='/Payouts' className="style" >Payouts</NavLink>
                <NavLink to='/FAQ' className="style" >FAQ</NavLink>
                <NavLink to='/Contact' className="style" >Contact Us</NavLink>
                
                {/* <li className="navItem "><a className="active" href="/">Home</a></li>
                <li className="navItem"><a href="Affiliate">Affiliate Program</a></li>
                <li className="navItem"><a href="Payouts">Payouts</a></li>
                <li className="navItem"><a href="FAQ">FAQ</a></li>
                <li className="navItem"><a href="Contact">Contact Us</a></li> */}
        </ul>
      </div>
      <div className="simple">The mining starts immediately. Free Plan give you 2% per day forever.</div>
    </div>
  );
};

export default navbar;

