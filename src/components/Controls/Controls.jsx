import { RxPlay, RxPause, RxTrackNext, RxTrackPrevious } from 'react-icons/rx';
import { useContext, useEffect, useState } from 'react';

import { AudioContext } from '@/providers/AudioProvider';
import Audio from '@/components/Audio/Audio';
import { formatTime } from '@/helpers/functions';

export default function Controls() {
  const { audioRef, currentTrack, tracks, setTracks, isPlaying, setIsPlaying } =
    useContext(AudioContext);

  const [timeData, setTimeData] = useState({
    currentTime: 0,
    duration: 0,
    progress: 0,
  });

  useEffect(() => {
    const duration = audioRef.current.duration;

    setTimeData((prev) => ({ ...prev, duration }));
  }, [audioRef]);

  const togglePlay = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    setIsPlaying(!isPlaying);
  };

  const keepPlaying = () => {
    if (isPlaying) {
      audioRef.current.play();
    }
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

  const skipBack = () => {
    let currentIndex = getActiveTrackIndex();
    let prevTrack;

    if (currentIndex === 0) {
      prevTrack = tracks.at(-1);
    } else {
      prevTrack = tracks[currentIndex - 1];
    }

    updateTrackList(prevTrack);
  };

  const skipForward = () => {
    const currentIndex = getActiveTrackIndex();
    const nextTrack = tracks[(currentIndex + 1) % tracks.length];

    updateTrackList(nextTrack);
  };

  const updateTime = (e) => {
    let progress = 0;
    let duration = e.target.duration;
    let currentTime = e.target.currentTime;

    if (typeof duration === 'number' && duration > 0) {
      progress = Math.floor((currentTime / duration) * 100);
    }

    setTimeData({
      ...timeData,
      currentTime,
      duration,
      progress,
    });
  };

  const handleLoadedMetadata = (e) => {
    updateTime(e);
    keepPlaying();
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
          aria-label="Skip back"
        >
          <RxTrackPrevious />
        </button>
        <button
          className="btn play"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <RxPause /> : <RxPlay />}
        </button>
        <button
          className="btn skip-forward"
          onClick={skipForward}
          aria-label="Skip forward"
        >
          <RxTrackNext />
        </button>
      </div>
      <Audio
        preload="metadata"
        src={currentTrack.audio}
        ref={audioRef}
        onEnded={skipForward}
        onTimeUpdate={updateTime}
        onLoadedMetadata={handleLoadedMetadata}
      />
    </div>
  );
}
