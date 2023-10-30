import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa'
import { useProductsContext } from '../../context/products_context';


export default function CartButtons() {
    const {closeSidebar} = useProductsContext()

    return (
      // We can add css of cart-btn-wrapper where we imported the CartButtons component
      <Wrapper className='cart-btn-wrapper'>
        <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
          <p>Cart</p>
          <span className='cart-container'>
              <FaShoppingCart/>
              <span className='cart-value'>2</span>
          </span>
        </Link>

        <button className='auth-btn'>
          <p>Login</p>
          <span className='auth-container'>
            <FaUserPlus/>
          </span>
        </button>
      </Wrapper>
    )
  }

const Wrapper = styled.div`
  /* FOR SMALL SCREEN */
  .cart-btn{
      display: flex;
      align-items: center;  
      gap: 1vw;
      color: red;
      text-decoration: none;
      p{
        font-size: 5vw;
      }
    }

    .cart-container {
        display: flex;
        width: 7vw;
        height: 7vw;
        align-items: center;
        svg {
          font-size: 6vw;
          z-index: 1;
          position: absolute;
        }
    }

    .cart-value {
      background-color: pink;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 3vw;
      width: 3vw;
      border-radius: 100vw;
      padding: 0.5vw;
      z-index: 2;
      position: absolute;
      margin-left: 4vw;
      margin-bottom: 4vw;
      font-size: 2.3vw;
    }

    .auth-btn{
      display: flex;
      align-items: center;  
      gap: 1vw;
      color: red;
      text-decoration: none;
      p{
        font-size: 5vw;
      }
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    .auth-container{
      font-size: 6vw;
      margin-top: 0.5vw;
    }



  /* FOR BIG SCREEN */
  @media (min-width:900px) {
    .cart-btn{
      display: flex;
      align-items: center;  
      gap: 0.8vw;
      color: red;
      text-decoration: none;
      p{
        font-size: 3vw;
      }
    }

    .cart-container {
        display: flex;
        width: 5vw;
        height: 5vw;
        align-items: center;
        svg {
          font-size: 3vw;
          z-index: 1;
          position: absolute;
        }
    }

    .cart-value {
      background-color: pink;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 1vw;
      width: 1vw;
      border-radius: 100vw;
      padding: 0.5vw;
      z-index: 2;
      position: absolute;
      margin-left: 2vw;
      margin-bottom: 2vw;
      font-size: 1.3vw;
    }

    .auth-btn{
      display: flex;
      align-items: center;  
      gap: 0.8vw;
      color: red;
      text-decoration: none;
      p{
        font-size: 3vw;
      }
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    .auth-container{
      font-size: 3.5vw;
      margin-top: 0.5vw;
    }
  }
  
`