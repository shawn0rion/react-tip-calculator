import styled from "styled-components";

const StyledLabel = styled.label`
  display: block;
  width: 100%;
  font-size: 16px;
  color: ${(props) => props.theme.colors.gray};
  & span {
    float: right;
    color: ${(props) => props.theme.colors.red};
  }
`;

export default function Label(props) {
  const { value, id, text } = props;
  return (
    <StyledLabel htmlFor={id}>
      {text} {value === "0" && <span>Can't be zero</span>}
    </StyledLabel>
  );
}
