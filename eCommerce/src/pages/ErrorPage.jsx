import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <Wrapper>
      <section className='page-100'>
        <h1>404</h1>
        <h3>Sorry, the page you tried cann't be fount</h3>
        <Link to='/'>
          <button>Home</button>
        </Link>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .page-100{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10vw;
    height: 70vh;

  }

  h1 {
    font-size: 10vw;
    margin: 0;
  }
  h3 {
    margin: 0;
  }
  button{
    font-size: 4vw;
    padding: 1vw 2vw;
    border-radius: 2vw;
    border: none;
    background-color: pink;
    cursor: pointer;
  }
`