import TipList from "./TipList.js";

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
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="bill">Bill: </label>
      <span className="warning-message">
        {bill === "0" ? "Can't be zero" : ""}
      </span>
      <input type="text" id="bill" value={bill} onChange={onBillChange} />
      <TipList tipRate={tipRate} onTipRateChange={onTipRateChange} />
      <label htmlFor="numPpl">Number of people:</label>
      <span className="warning-message">
        {numPpl === "0" ? "Can't be zero" : ""}
      </span>
      <input id="numPpl" type="text" value={numPpl} onChange={onNumPplChange} />
    </form>
  );
}
