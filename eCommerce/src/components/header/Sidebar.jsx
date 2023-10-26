import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa';
import { links } from '../../utils/constants';
import { Link } from 'react-router-dom'
import CartButtons from './CartButtons';


export default function Sidebar() {
    const isOpen = true;

    return (
      <SidebarContainer>
        <aside className={`${isOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>

          <div className='sidebar-header'>
            <div className='logo-head'></div>
            <button className='close-btn'>
              <FaTimes/>
            </button>
          </div>

          <ul className='links'>
            {
              links.map(({id, text, url}) => (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              ))
            }
            <li>
              <Link to={'/checkout'}>Checkout</Link>
            </li>
          </ul>

          <CartButtons/>

        </aside>
      </SidebarContainer>
    )
  }

  const SidebarContainer = styled.div`
    /* FOR SMALL SCREEN */
    color: red;
    text-align: center;


    .sidebar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: var(--transition);
    }
    
    .logo-head{
      background-image: url('https://th.bing.com/th?id=OIF.OHg%2bXqEw4LSA5IuFCmT6TQ&pid=ImgDet&rs=1');
      background-size: cover;
      background-position: center;
      width: 12vw;
      height: 12vw;
      border-radius: 100vw;
    }

    .close-btn {
      font-size: 8vw;
      background: transparent;
      border: none;
      cursor: pointer;
      color: red;
      transition: var(--transition);
      &:hover {
        color: orange;
      }
    }

    .links{
      display: flex;
      flex-direction: column;
      gap: 2vw;
    }

    .links li {
      font-size: 6vw;
      list-style-type: none;
      text-align: left;
      a{
        text-decoration: none;
        color: red;
        transition: var(--transition);
        &:hover{
          padding: 0 2vw;
          color: orange;
        }
      }
    }

    /* The class is from CartButtons component */
    .cart-btn-wrapper{
      display: flex;
      gap: 6vw;
      justify-content: center;
    }

    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: var(--transition);
      transform: translate(-100%);
      z-index: -1;
    }

    .show-sidebar {
      transform: translate(0);
      z-index: 999;
    }
 

    /* FOR BIG SCREEN */
    @media (min-width:900px) {
      display: none;
    }
  ` 
