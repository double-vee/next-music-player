'use client';
import { useRef, useState } from 'react';

export default function Controls({ currentTrack }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef();

  const handlePlay = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    setIsPlaying(!isPlaying);
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
          {isPlaying ? 'pause' : 'play'}
        </button>
        <button className="skip-forward">forward</button>
      </div>
      <audio
        ref={audioRef}
        src={currentTrack.audio}
        onEnded={() => setIsPlaying(false)}
      ></audio>
    </div>
  );
}
