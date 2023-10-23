import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'


export default function CartButtons() {
    return (
      <Wrapper className='cart-btn-wrapper'>
        <Link to='/cart' className='cart-btn'>
            <p>Cart</p>
            <span className='cart-container'>
                <FaShoppingCart/>
                <span className='cart-value'>2</span>
            </span>
        </Link>
      </Wrapper>
    )
  }

const Wrapper = styled.div`
  .cart-btn {
    display: flex;
    align-items: center;
    gap: 2vw;
    color: red;
    font-size: 2vw;
    border: 2px solid black;
}

.cart-container {
    display: flex;
    align-items: center;
    svg {
      font-size: 3vw;
    }
  }

  .cart-value {
    background-color: pink;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2vw;
    width: 2vw;
    border-radius: 100vw;
    padding: 0.5vw;
    position: absolute;
    top: -10px;
    right: -16px;
  }

  /* .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }  */
`