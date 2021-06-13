import React from "react";
import styled from "styled-components";
import HumidityBar from "./HumidityBar";

function Humidity(data) {
  return (
    <div>
      <HumidityText>Humidity</HumidityText>
      <HumidityContainer>
        <HumidityBar humidity={data.humidity} />
        {data.humidity && <h1>{data.humidity}%</h1>}
      </HumidityContainer>
    </div>
  );
}

export default Humidity;

const HumidityText = styled.h4`
  font-size: 1.4rem ;
  font-style: italic;
  margin-bottom: 0.5rem;        
`;
const HumidityContainer = styled.div`
  display: flex;
  align-items: flex-end;

  h1{
    margin-left: 1rem;
  }
`;
