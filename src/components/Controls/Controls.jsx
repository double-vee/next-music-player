'use client';
import { RxPlay, RxPause, RxTrackNext, RxTrackPrevious } from 'react-icons/rx';
import { useEffect, useState } from 'react';

import Audio from '@/components/Audio/Audio';
import { formatTime } from '@/helpers/helpers';

export default function Controls({
  audioRef,
  currentTrack,
  setCurrentTrack,
  tracks,
  setTracks,
  isPlaying,
  setIsPlaying,
}) {
  const [timeData, setTimeData] = useState({
    currentTime: 0,
    duration: 0,
    progress: 0,
  });

  useEffect(() => {
    const duration = audioRef.current.duration;

    setTimeData((prev) => ({ ...prev, duration }));
  }, [audioRef]);

  const play = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    setIsPlaying(!isPlaying);
  };

  const getActiveTrackIndex = () => {
    return tracks.findIndex((item) => item.active === true);
  };

  const updateTrackList = (activeTrack) => {
    const nextTracks = tracks.map((item) => {
      return item.id === activeTrack.id
        ? { ...item, active: true }
        : { ...item, active: false };
    });

    setTracks(nextTracks);
  };

  const skipBack = async () => {
    let currentIndex = getActiveTrackIndex();
    let prevTrack;

    if (currentIndex === 0) {
      prevTrack = tracks.at(-1);
    } else {
      prevTrack = tracks[currentIndex - 1];
    }

    await setCurrentTrack({ ...prevTrack, active: true });

    if (isPlaying) {
      audioRef.current.play();
    }

    updateTrackList(prevTrack);
  };

  const skipForward = async () => {
    const currentIndex = getActiveTrackIndex();

    const nextTrack = tracks[(currentIndex + 1) % tracks.length];

    await setCurrentTrack({ ...nextTrack, active: true });

    if (isPlaying) {
      audioRef.current.play();
    }

    updateTrackList(nextTrack);
  };

  const updateTime = (e) => {
    let progress = 0;
    let duration = e.target.duration;
    let currentTime = e.target.currentTime;

    if (typeof duration === 'number' && duration > 0) {
      progress = Math.floor((currentTime / duration) * 100);
    }

    console.log(duration, currentTime, progress);

    setTimeData({
      ...timeData,
      currentTime,
      duration,
      progress,
    });
  };

  const setTime = (e) => {
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
        <div className="input-wrapper">
          <input
            type="range"
            min={0}
            max={timeData.duration || 0}
            value={timeData.currentTime}
            onChange={setTime}
          />
          <div
            className="progress-indicator"
            style={{
              transform: `translateX(${
                timeData.progress < 99 ? timeData.progress : 100
              }%)`,
            }}
          ></div>
        </div>
        <p>{timeData.duration ? formatTime(timeData.duration) : '0:00'}</p>
      </div>
      <div className="play-control">
        <button
          className="btn skip-back"
          onClick={skipBack}
        >
          <RxTrackPrevious />
        </button>
        <button
          className="btn play"
          onClick={play}
        >
          {isPlaying ? <RxPause /> : <RxPlay />}
        </button>
        <button
          className="btn skip-forward"
          onClick={skipForward}
        >
          <RxTrackNext />
        </button>
      </div>
      <Audio
        src={currentTrack.audio}
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
        onTimeUpdate={updateTime}
        onLoadedMetadata={updateTime}
      />
    </div>
  );
}
