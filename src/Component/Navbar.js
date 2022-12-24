import React from 'react'
import { useSelector } from 'react-redux'
import './Navbar.css'

const Navbar = () => {
  const thali = useSelector(state => state.counter.thali)
  console.log(thali.length)
  return (
    <div className='header'>
      <div className="logo">
        <img src="https://cdn3.vectorstock.com/i/1000x1000/73/07/cooking-and-restaurant-logo-design-vector-29707307.jpg" style={{ height: "70px" }} />
        <h5 className='logo_name' style={{margin:"12px"}}>Food planet Thali</h5>
      </div>
      <div className="search">
        <input type="text" className='search_input' placeholder='search Your ' />

      </div>
 
      <div className="cart">
        <button className='btn_cart'>
          view Cart <button className='btn_qwt_state'>{thali.length} </button></button>


      </div>
    </div>
  )
}

export default Navbar