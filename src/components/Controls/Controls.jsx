'use client';
import { RxPlay, RxPause, RxTrackNext, RxTrackPrevious } from 'react-icons/rx';
import { useEffect, useRef, useState } from 'react';

import { formatTime } from '@/helpers/helpers';

export default function Controls({ currentTrack }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const [timeData, setTimeData] = useState({
    currentTime: 0,
    duration: 0,
  });

  const audioRef = useRef();

  useEffect(() => {
    const duration = audioRef.current.duration;

    setTimeData((prev) => ({ ...prev, duration }));
  }, []);

  const handlePlay = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = (e) => {
    setTimeData({
      ...timeData,
      currentTime: e.target.currentTime,
      duration: e.target.duration,
    });
  };

  const handleChange = (e) => {
    audioRef.current.currentTime = +e.target.value;

    setTimeData({
      ...timeData,
      currentTime: +e.target.value,
    });
  };

  return (
    <div className="controls-wrapper">
      <div className="time-control">
        <p>{formatTime(timeData.currentTime)}</p>
        <input
          type="range"
          min={0}
          max={timeData.duration}
          value={timeData.currentTime}
          onChange={handleChange}
        />
        <p>{formatTime(timeData.duration)}</p>
      </div>
      <div className="play-control">
        <button className="btn skip-back">
          <RxTrackPrevious />
        </button>
        <button
          className="btn play"
          onClick={handlePlay}
        >
          {isPlaying ? <RxPause /> : <RxPlay />}
        </button>
        <button className="btn skip-forward">
          <RxTrackNext />
        </button>
      </div>
      <audio
        ref={audioRef}
        src={currentTrack.audio}
        onEnded={() => setIsPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
      ></audio>
    </div>
  );
}
