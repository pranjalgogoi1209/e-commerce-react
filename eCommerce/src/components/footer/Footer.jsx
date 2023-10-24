import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <Wrapper>
      <h5>
        <span>&copy;</span>
        <span>{new Date().getFullYear()}</span>
        <span> BuyS-Mart All rights reserved</span>
      </h5>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  @media (min-width:900px) {
    background-color: black;
    color: white;
    height: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
