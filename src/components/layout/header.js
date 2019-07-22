import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

const Header = styled.header`
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  z-index: 9999;
  background-color: white;
`

const Title = styled.h1`
  margin: 0;
  padding: 16px 0;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 16px 0;
  }
`

const Nav = styled.nav`
  margin: 0;
  padding: 0;
`

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: space-between;
`

const NavItem = styled.li`
  margin: 0;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;

  h3 {
    cursor: pointer;
    padding-bottom: 2px;
    border-bottom: 2px solid white;
    ${props =>
      props.active &&
      css`
        border-bottom: 2px solid black;
      `}

    &:hover {
      opacity: 1;
      border-bottom: 2px solid black;
    }
  }
`

export default () => (
  <Header>
    <Title>
      <Link to="/">
        <strong>Lucas</strong> Eckman
      </Link>
    </Title>
    <Nav>
      <NavList>
        <NavItem>
          <Link to="/skills">
            <h3>Skills</h3>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/portfolio">
            <h3>Portfolio</h3>
          </Link>
        </NavItem>
      </NavList>
    </Nav>
  </Header>
)
