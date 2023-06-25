export default function Display(props) {
  const { tipAmount, totalAmount, onFormReset } = props;
  return (
    <>
      <p>${tipAmount === "NaN" ? "0.00" : tipAmount}</p>
      <p>${totalAmount === "NaN" ? "0.00" : totalAmount}</p>
    </>
  );
}
