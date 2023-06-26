import styled from "styled-components";
import StyledButton from "./styles/Button.styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  justify-content: space-between;
  width: 100%;
  padding: 40px;
  background-color: ${(props) => props.theme.colors.darkGreen};

  & > div {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  & button {
    width: 100%;
    background-color: ${(props) => props.theme.colors.strongGreen};
  }

  & button:hover,
  & button:focus {
    background-color: ${(props) => props.theme.colors.mintGreen};
  }

  @media (max-width: 919px) {
    padding: 24x;
  }
`;

const StyledAmount = styled.div`
  display: flex;
  justify-content: space-between;

  & .amount {
    color: ${(props) => props.theme.colors.strongGreen};
    font-size: 32px;
  }

  & .title {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }

  & .subtitle {
    font-size: 13px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.lightGreen};
  }
`;
export default function Display(props) {
  const { tipAmount, totalAmount, onFormReset } = props;
  return (
    <Container>
      <div>
        <StyledAmount>
          <div>
            <p className="title">Tip Amount</p>
            <p className="subtitle">/ person</p>
          </div>

          <p className="amount">${tipAmount === "NaN" ? "0.00" : tipAmount}</p>
        </StyledAmount>
        <StyledAmount>
          <div>
            <p className="title">Tip Amount</p>
            <p className="subtitle">/ person</p>
          </div>
          <p className="amount">
            ${totalAmount === "NaN" ? "0.00" : totalAmount}
          </p>
        </StyledAmount>
      </div>

      <StyledButton onClick={onFormReset}>reset</StyledButton>
    </Container>
  );
}
