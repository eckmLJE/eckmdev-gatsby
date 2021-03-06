import React from 'react'
import styled from 'styled-components'

import LinkedIn from '../images/linkedin'
import GitHub from '../images/github'

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  margin: 0;
  padding: 0;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: solid 1px silver;
`

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`

const NavItem = styled.li`
  margin: 0;
  padding: 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: darkred;
  }

  a {
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  img {
    width: 2rem;
    opacity: 0.75;
  }

  img:hover {
    opacity: 1;
  }
`

export default () => (
  <Nav>
    <NavList>
      <NavItem>
        <a
          href="https://www.linkedin.com/in/lucaseckman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
      </NavItem>
      <NavItem>
        <a
          href="https://github.com/eckmLJE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
      </NavItem>
    </NavList>
  </Nav>
)
