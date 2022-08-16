import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import {MdAccountCircle} from 'react-icons/md'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className="main">
        <div className='main-label'>
          <Link to={'/'}  className='link'>
            My Store
          </Link>
        </div>
        <ul>
            <li><Link className='link' to={'/about'}>Abous Us</Link></li>
            <li><Link className='link' to={'/contacts'}>Contact Us</Link></li>
            <li className='bucket-button'><Link className='link' to={'/bucket'}><FaShoppingCart/></Link></li>
            <li><Link className='link' to={'/authorization'}><MdAccountCircle/></Link></li>
        </ul>
  </div>
  )
}
