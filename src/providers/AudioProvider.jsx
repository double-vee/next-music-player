'use client';

import { createContext, useState, useRef } from 'react';

import { data } from '@/data';

export const AudioContext = createContext();

export default function AudioProvider({ children }) {
  const [tracks, setTracks] = useState(data());
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef();

  const currentTrack = tracks.find((item) => item.active === true);

  return (
    <AudioContext.Provider
      value={{
        audioRef,
        tracks,
        setTracks,
        currentTrack,
        isPlaying,
        setIsPlaying,
        isMuted,
        setIsMuted,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}
