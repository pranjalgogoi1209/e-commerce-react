import React from 'react'
import styled from 'styled-components'


export default function Testing() {
    return (
      <Wrapper>
        <h1>BuyS-Mart, An E-Commerce Website</h1>
      </Wrapper>
    )
  }


const Wrapper = styled.section`
    background-color: pink;
    border-radius: 2vw;
    box-shadow: 1vw 1vw 1vw gray;
    padding: 2vw;
    h1{
        color: red;
        font-size: 3vw;
        text-align: center;
    }
`