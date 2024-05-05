export default function Controls() {
  return (
    <div className="controls-wrapper">
      <div className="time-control">
        <p>00:00</p>
        <input type="range" />
        <p>00:00</p>
      </div>
      <div className="play-control">
        <button className="skip-back">back</button>
        <button className="play">play</button>
        <button className="skip-forward">forward</button>
      </div>
    </div>
  );
}
