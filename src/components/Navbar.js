import React,{} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
const Navbar=()=>{

  return(
    <div>
 <nav>
  {/* <navitem>
   <a className='topmenu' href="Top-wear">Top-Wear</a>
   <a className='topmenu' href="Bottom-wear">Bottom-Wear</a>
   <a className='topmenu' href="Mens-wear">Mens-Wear</a>
   <a className='topmenu' href="Ladies-wear">Ladies-Wear</a>
  </navitem> */}
  <Link className='topmenu' to="/Top-wear">Top-Wear</Link>
  <Link className='topmenu' to="/Bottom-wear">Bottom-Wear</Link>
  <Link className='topmenu' to="/Mens-wear">Mens-Wear</Link>
  <Link className='topmenu' to="/Ladies-wear">Ladies-Wear</Link>
 </nav>
 </div>                                                                                                                             
    )
}
export default Navbar;