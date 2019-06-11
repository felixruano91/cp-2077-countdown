import React from 'react'
import styled from 'styled-components'
import { FaRegHeart } from 'react-icons/fa'

const FooterWrapper = styled.footer`
    color: white;
`

export default function Footer() {
    return (
        <FooterWrapper>
            © 2019 Felix Ruano | Made with <FaRegHeart /> in Merida
        </FooterWrapper>
    )
}