import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Navbar() {
  const datas =useSelector((state)=>state.sagar)
  return (
    <div    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',  position: "sticky", color: "green"
  }}>
<span className="logo" style={{position: "sticky", color: "green"}}> Redux Store</span>
<div style={{position:"sticky"}}>
    <Link  className="navLink" to="/">Home</Link>
    <Link  className="navLink" to="/cart">Cart</Link>
    <span   className="cartCount"> 
        cart items:{datas.length}
    </span>

</div>

    </div>
  )
}

export default Navbar