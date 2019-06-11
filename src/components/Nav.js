import React from 'react'
import styled from 'styled-components'

// This is for NavLink element (React Router)
// const activeStyle = {
//     color: 'rgb(187, 46, 31)'
// }
const NavWrapper = styled.nav`
    font-family: Electrolize, sans-serif;
    color: rgb(194, 194, 194);
    /* border: solid 1px blue; */
    text-transform: uppercase;
`
const NavUL = styled.ul`
    /* .row */
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
`
const NavLI = styled.li`
    /* .nav-link */
    color: inherit;
    font-size: 1rem;
    font-weight: bold;
    list-style: none;
    /* .nav li */
    margin: 0 1rem;
`

export default function Nav() {
    return (
        <NavWrapper>
            <NavUL>
                <NavLI>
                    countdown
                </NavLI>
                <NavLI>
                    playlists
                </NavLI>
                <NavLI>
                    forum
                </NavLI>
            </NavUL>
        </NavWrapper>
    )
}