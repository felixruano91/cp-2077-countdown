import React from 'react'
import styled from 'styled-components'
import ReactMomentCountDown from 'react-moment-countdown';
import moment from 'moment'

const CounterWrapper = styled.h1`
    display: flex;
    justify-content: center;
    color: #fae127;
    text-shadow: 0 0 20px #fae127;
    text-align: center;
    font-family: "Electrolize","sans-serif";
    font-size: 3.5rem;
    margin: 19rem auto;
    margin-top: inherit;
`

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

export function Header() {
    return (
        <NeonBlue>
            cyberpunk 2077 countdown:
        </NeonBlue>
    )
}

export default function Counter() {
    const dateInFuture = moment('2020-04-16 23:59:59');
    return (
        <React.Fragment>
            <Header />
            <CounterWrapper>
                <ReactMomentCountDown toDate={dateInFuture} sourceFormatMask='YYYY-MM-DD HH:mm:ss' targetFormatMask='DDDD:HH:mm:ss' />
            </CounterWrapper>
        </React.Fragment>

    )
}