import React from 'react'
import styled from 'styled-components'
import { useProductsContext } from '../../context/productsContext'

export default function Footer() {
  const kaiseHai = useProductsContext()
  return (
    <Wrapper>
      <h5>
        <span>&copy;</span>
        <span>{new Date().getFullYear()}</span>
        <span> BuyS-Mart All rights reserved</span>
      </h5>
      <h5>{kaiseHai}</h5>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  /* FOR SMALL SCREEN */
  background-color: black;
  color: white;
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;

  /* FOR BIG SCREEN */
  @media (min-width:900px) {
    background-color: black;
    color: white;
    height: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
