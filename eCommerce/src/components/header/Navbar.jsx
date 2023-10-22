import React from 'react'
import styled from 'styled-components'


export default function Navbar() {
    return (
      <NavContainer>
        <div>
          <div className='logo'></div>
          <div className='pages'>
            <div>Home</div>
            <div>About</div>
            <div>Products</div>
          </div>
          <div className='btns'>
            <div>Cart</div>
            <div>LogIn</div>
          </div>
        </div>
      </NavContainer>
    )
  }

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .logo{
    background-image: url('https://th.bing.com/th?id=OIF.OHg%2bXqEw4LSA5IuFCmT6TQ&pid=ImgDet&rs=1');
    background-size: cover;
    background-position: center;
    width: 6vw;
    height: 6vw;
    border-radius: 100vw;
  }

  .pages{
    display: flex;
    justify-content: space-around;
    gap: 2vw;
    font-size: 2.5vw;
  }

  .btns{
    display: flex;
    justify-content: space-around;
    gap: 2vw;
    font-size: 3vw;
    font-weight: 700;
  }
`
