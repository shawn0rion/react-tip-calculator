import TipList from "./TipList.js";
import Label from "./Label.js";
import Input from "./Input.js";
import DollarIcon from "../images/icon-dollar.svg";
import PersonIcon from "../images/icon-person.svg";
import StyledForm from "./styles/Form.styled";

export default function Form(props) {
  const {
    bill,
    tipRate,
    numPpl,
    onBillChange,
    onTipRateChange,
    onNumPplChange,
  } = props;

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  // add conditional rendering for can't be 0
  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <div>
        <Label value={bill} id={"bill"} text={"Bill: "} />
        <Input
          img={DollarIcon}
          id={"bill"}
          type={"text"}
          placeholder="0"
          value={bill}
          onInput={onBillChange}
        />
      </div>
      <TipList tipRate={tipRate} onTipRateChange={onTipRateChange} />
      <div>
        <Label value={numPpl} id="numPpl" text={"Number of People: "} />
        <Input
          img={PersonIcon}
          id={"numPpl"}
          type={"text"}
          placeholder="0"
          value={numPpl}
          onInput={onNumPplChange}
        />
      </div>
    </StyledForm>
  );
}
