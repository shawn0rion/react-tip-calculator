import styled from "styled-components";
const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.darkGreen};
  color: ${(props) => props.theme.colors.white};
  padding: 10px 30px;
  font-size: 24px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &.tip-btn {
    width: 117px;
    height: 48px;
  }

  &.active {
    color: ${(props) => props.theme.colors.darkGreen};
    background-color: ${(props) => props.theme.colors.strongGreen};
  }

  &:focus,
  &:hover {
    color: ${(props) => props.theme.colors.darkGreen};
    background-color: ${(props) => props.theme.colors.strongGreen};
  }
`;

export default StyledButton;
