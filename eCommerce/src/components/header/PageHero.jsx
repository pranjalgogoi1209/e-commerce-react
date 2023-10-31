import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


export default function PageHero({title}) {
    return (
      <Wrapper>
        <h1>
            <Link to={'/'}>Home</Link>/{title}
        </h1>
      </Wrapper>
    )
  }

const Wrapper = styled.div`
    height: 20vh;
    background-color: aqua;
`
