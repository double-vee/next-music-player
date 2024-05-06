'use client';
import { useRef } from 'react';

export default function Controls({ currentTrack }) {
  const audioRef = useRef();

  const handlePlay = () => {
    audioRef.current.play();
  };

  return (
    <div className="controls-wrapper">
      <div className="time-control">
        <p>00:00</p>
        <input type="range" />
        <p>00:00</p>
      </div>
      <div className="play-control">
        <button className="skip-back">back</button>
        <button
          className="play"
          onClick={handlePlay}
        >
          play
        </button>
        <button className="skip-forward">forward</button>
      </div>
      <audio
        ref={audioRef}
        src={currentTrack.audio}
      ></audio>
    </div>
  );
}
