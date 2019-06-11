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
    margin: 20rem auto;
    margin-top: inherit;
`

export default function Counter() {
    const dateInFuture = moment('2020-04-16 23:59:59');
    return (
        <CounterWrapper>
            <ReactMomentCountDown toDate={dateInFuture} sourceFormatMask='YYYY-MM-DD HH:mm:ss' targetFormatMask='DDDD:HH:mm:ss' />
        </CounterWrapper>
    )
}