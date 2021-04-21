import styled from "styled-components";

const StyledDiv = styled.div`
  text-shadow: 10px 16px 10px;
`;

export default function Header() {
  return (
    <StyledDiv>
      <h1>Boring Plant Info</h1>
    </StyledDiv>
  );
}
