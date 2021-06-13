import styled from "styled-components";

const HumidityBar = ({ humidity }) => {
  console.log(humidity);
  return (
    // this is one way of doing it
    // <div style={{width: "1rem", height: "5rem", backgroundColor: "#bbcfd8" }}>
    //     <div style={{backgroundColor: "#78D2F9",width: "1rem", height: "2rem"}}></div>
    // </div>

    //styled-components
    <Bar humidity={humidity}>
      <section style={{ height: `${humidity}%` }}></section>
    </Bar>
  );
};

export default HumidityBar;

const Bar = styled.div`
  width: 1rem;
  height: 5rem;
  background: #c4c4c4;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: flex-end;

  &:hover{ 
    transform: scale(1.5)
  }

  section {
    width: 1rem;
    background-color: #78d2f9;
    transition: ease-in 0.7s;
  }
`;
