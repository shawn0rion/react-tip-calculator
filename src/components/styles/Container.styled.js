import styled from "styled-components";

const StyledContainer = styled.div`
  border-radius: 20px;
  background-color: #fff;
  padding: 32px;
  gap: 48px;
  display: flex;
  width: 920px;

  @media (max-width: 919px) {
    width: 375px;
    padding: 24px;
    gap: 32px;
    flex-direction: column;
    border-radius: 0px;
  }
`;

export default StyledContainer;
