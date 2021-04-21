import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px white solid;
  width: 35%;
  font-size: 0.6em;
  background-color: black;
  margin-left: 32%;
  color: white;
  font-weight: bold;
  border-radius: 10%;
  padding: 0.5% 1% 0.5% 1%;

  img {
    width: 100%;
    height: 60vh;
    border-radius: 10%;
    border: 4px solid white;
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
