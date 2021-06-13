import { render } from "@testing-library/react"
import React from "react"
import styled from "styled-components"

function Temperature(data){
    // console.log(data)
return(
    <TemperatureText>
        {(data.temp-273.15).toFixed(2)}
        <p>°c</p>
    </TemperatureText>
)

}

export default Temperature

const TemperatureText = styled.h3`
    font-size: 3rem;
    font-weight: bold;
    font-style: italic;
    text-align: center;
    margin: 0 -1.5rem;

    p{
        font-size: 1.5rem;
        margin-top: -4rem;
        margin-left: 9rem;
    }
`

// let's style from the beginning
// with styled components this time
// okay?ok