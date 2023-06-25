export default function TipList({ tipRate, onTipRateChange }) {
  const defaultTips = [5, 10, 15, 25, 50];
  // add styled tip button here
  return (
    <div className="tip-list">
      {defaultTips.map((x, idx) => (
        <button key={idx} onClick={onTipRateChange}>
          {x}%
        </button>
      ))}
    </div>
  );
}
