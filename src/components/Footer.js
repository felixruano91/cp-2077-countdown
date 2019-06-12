import React from 'react'
import styled from 'styled-components'
import { Heart } from 'styled-icons/boxicons-regular/Heart'

const FooterWrapper = styled.footer`
    color: rgb(194, 194, 194);
    text-align: center;
    font-size: .8rem;
`

export default function Footer() {
    return (
        <FooterWrapper>
            © 2019 Felix Ruano | Made with <a href='https://github.com/felixruano91/cp-2077-countdown'><Heart style={{ color: 'red' }} size={16} /></a> in Merida
        </FooterWrapper>
    )
}