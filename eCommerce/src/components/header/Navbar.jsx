import React from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import styled from 'styled-components'
import { links } from '../../utils/constants'
import CartButtons from './CartButtons'

export default function Navbar() {
    return (
      <NavContainer>
        <div className='nav-center'>

          <div className="nav-header">
            <Link to='/'>
              <div className='logo'></div>
            </Link>
            <button className='nav-toggle'>
              <FaBars/>
            </button>
          </div>
          
          <ul className='nav-links'>
            {
              links.map(link => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))
            }
          </ul>

          <CartButtons/>

        </div>
      </NavContainer>
    )
  }

const NavContainer = styled.nav`
  /* FOR SMALL SCREEN SIZE */
  .nav-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo{
    background-image: url('https://th.bing.com/th?id=OIF.OHg%2bXqEw4LSA5IuFCmT6TQ&pid=ImgDet&rs=1');
    background-size: cover;
    background-position: center;
    width: 14vw;
    height: 14vw;
    border-radius: 100vw;
  }

  .nav-toggle{
    color: red;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 8vw;
  }

  .nav-links{
    display: none;
  }

  /* FOR BIG SCREEN SIZE */
 @media (min-width: 900px) {
  .nav-center{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .nav-toggle{
    display: none;
  }

  .nav-links{
    display: flex;
    list-style-type: none;
    gap: 5vw;
    font-size: 3vw;
    a{
      text-decoration: none;
      color: black;
      &:hover{
        border-bottom: 0.2vw solid black;
      }
      }

  }
 }

`
