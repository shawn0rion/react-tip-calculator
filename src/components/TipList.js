import styled from "styled-components";
import StyledButton from "./styles/Button.styled";

const CustomTip = styled.input`
  width: 117px;
  height: 48px;
`;

export default function TipList({ tipRate, onTipRateChange }) {
  const defaultTips = [5, 10, 15, 25, 50];
  // add styled tip button here
  return (
    <div id="tip-list">
      {defaultTips.map((x, idx) => (
        <StyledButton className={"tip-btn"} key={idx} onClick={onTipRateChange}>
          {x}%
        </StyledButton>
      ))}
      <CustomTip
        id="custom-tip"
        type="text"
        onInput={(e) => {
          // remove any input that is not integer
          const value = [...e.target.value]
            .filter((x) => Number.isInteger(parseInt(x)))
            .join("");
          e.target.value = value;
          onTipRateChange(e);
        }}
        placeholder="Custom"
      />
    </div>
  );
}
