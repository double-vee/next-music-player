'use client';

import { createContext, useState, useRef } from 'react';

import { data } from '@/data';

export const AudioContext = createContext();

export default function AudioProvider({ children }) {
  const [tracks, setTracks] = useState(data());
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef();

  return (
    <AudioContext.Provider
      value={{
        audioRef,
        tracks,
        setTracks,
        currentTrack,
        setCurrentTrack,
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
