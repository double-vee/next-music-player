'use client';
import { RxPlay, RxPause, RxTrackNext, RxTrackPrevious } from 'react-icons/rx';
import { useEffect, useRef, useState } from 'react';

import { formatTime } from '@/helpers/helpers';

export default function Controls({ currentTrack }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const [timeData, setTimeData] = useState({
    currentTime: null,
    duration: null,
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

  return (
    <div className="controls-wrapper">
      <div className="time-control">
        <p>
          {timeData.currentTime ? formatTime(timeData.currentTime) : '0:00'}
        </p>
        <input type="range" />
        <p>{timeData.duration ? formatTime(timeData.duration) : '0:00'}</p>
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
