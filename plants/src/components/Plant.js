import styled from "styled-components";

const StyledDiv = styled.div``;

export default function Plant({ plant }) {
  return (
    <StyledDiv>
      <div className="image">
        <img src={plant.image_url} alt="Plants" />
      </div>
    </StyledDiv>
  );
}
