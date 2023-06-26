import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;

  & #tip-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 48px 48px;
    gap: 16px;
    width: 100%;
  }

  & #tip-list > * {
    width: 100%;
  }

  & #tip-list > input {
    width: 100%;
    background-color: transparent;
    text-align: right;
    font-size: 24px;
    border: 0;
    padding: 8px 15px;
    color: #222;
    background-color: ${(props) => props.theme.colors.lightCyan};
    outline: 0;
  }

  @media (max-width: 919px) {
    gap: 32px;
    & #tip-list {
      grid-template-rows: 48px 48px 48px;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default StyledForm;
