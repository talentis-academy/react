function Car({ make, color, onClick }) {
  let colorInfo = color ? color : "Unknown";
  return (
    <div className="car-item" onClick={onClick}>
      <div>{make}</div>
      <div>{colorInfo}</div>
    </div>
  );
}

export default Car;
