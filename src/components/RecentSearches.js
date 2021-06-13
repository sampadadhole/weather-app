import React from "react";
import styled from "styled-components";

function RecentSearches(data) {
  let recent = localStorage.getItem("location");
  if (recent != null) {
    recent = recent.split(", ");
  }

  const rec = recent.slice(recent.length - 3, recent.length);
  return (
    <Recentser>
      <RecntTag>recent searches: </RecntTag>
      <RecentAPI>{recent != null && <p>{rec}</p>}</RecentAPI>
    </Recentser>
  );
}

export default RecentSearches;

const Recentser = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
margin: 0 auto;
`;

const RecntTag = styled.div`
position:relative;
border-radius: 4px;
background: #eeeeee;
`;

const RecentAPI = styled.div`
position: relative;
background: #F1E3E3;
border-radius: 8px;
`;
