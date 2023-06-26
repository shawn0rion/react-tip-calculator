import styled from "styled-components";

const StyledInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 15px;
  color: ${(props) => props.theme.colors.darkCyan};
  background-color: ${(props) => props.theme.colors.lightCyan};

  & input {
    width: 100%;
    background-color: transparent;
    text-align: right;
    font-size: 24px;

    border: 0;
    outline: 0;
  }

  & img {
    background-color: transparent;
  }
`;

export default function Input(props) {
  const { img, id, type, placeholder, value, onInput } = props;
  return (
    <StyledInput>
      {img && <img src={img} alt="" />}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onInput={onInput}
      />
    </StyledInput>
  );
}
