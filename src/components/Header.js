import React from 'react'
import styled from 'styled-components'

const NeonBlue = styled.h1`
  color: #1BCFEE;
  /* h1-h6 && th CSS */
  font-family: "Electrolize", "sans-serif";
  /* h1 */
  font-size: 1rem;
  /* h1-h6 && th CSS */
  font-weight: bold;
  /* h1 */
  text-align: center;
  /* Neon Yellow */
  text-shadow: 0 0 10px #1BCFEE;
  /* h1-h6 && th CSS */
  text-transform: uppercase;
  margin-top: 16rem;
  margin-bottom: 1rem;
`

export default function Header() {
    return (
        <NeonBlue>
            cyberpunk 2077 countdown:
        </NeonBlue>
    )
}