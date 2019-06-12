import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

// This is for NavLink element (React Router)
// const activeStyle = {
//     color: 'rgb(187, 46, 31)'
// }
const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-evenly;
    font-family: Electrolize, sans-serif;
    color: rgb(194, 194, 194);
    /* border: solid 1px blue; */
    text-transform: uppercase;
`
const NavUL = styled.ul`
    /* .row */
    display: flex;
    flex-direction: row;
    padding: 0;
`
const NavLI = styled.li`
    /* .nav-link */
    font-size: 1rem;
    font-weight: bold;
    list-style: none;
    /* .nav li */
    margin: 0 1rem;
    text-decoration: none;
`

const activeStyle = {
    color: '#fae127',
    textShadow: '0 0 20px #fae127'
}

export default function Nav() {
    return (
        <NavWrapper>
            <NavUL>
                <NavLI>
                    <NavLink
                        to='/'
                        exact
                        activeStyle={activeStyle}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        countdown
                    </NavLink>
                </NavLI>
                <NavLI>
                    <NavLink
                        to='/playlists'
                        exact
                        activeStyle={activeStyle}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        playlists
                    </NavLink>
                </NavLI>
                <NavLI>
                    forum
                </NavLI>
            </NavUL>
        </NavWrapper>
    )
}