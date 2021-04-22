import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px gold solid;
  width: 30%;
  font-size: 0.6em;
  text-shadow: 10px 8px 8px;
  margin-left: 34%;
  margin-top: 1%;
  color: gold;
  font-weight: bold;
  border-radius: 10%;
  padding: 0.5% 1% 0.5% 1%;

  img {
    width: 100%;
    height: 55vh;
    border-radius: 10%;
    border: 4px solid gold;
  }
`;

export default function Plant({ plant }) {
  return (
    <StyledDiv>
      <img src={plant.image_url} alt="Plants" />

      <p>Name: {plant.common_name}</p>
      <p>Scientific name: {plant.scientific_name}</p>
      <p>{`The ${plant.common_name} was found in ${plant.year}`}</p>
    </StyledDiv>
  );
}
