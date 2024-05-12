'use client';

import { useState, useRef } from 'react';

import Controls from '@/components/Controls/Controls';
import Track from '@/components/Track/Track';
import Library from '@/components/Library/Library';

import { data } from '@/data';

export default function Player() {
  const [tracks, setTracks] = useState(data());
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef();

  return (
    <>
      <section>
        <Track currentTrack={currentTrack} />
        <Controls
          audioRef={audioRef}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </section>
      <Library
        audioRef={audioRef}
        tracks={tracks}
        setCurrentTrack={setCurrentTrack}
        isPlaying={isPlaying}
      />
    </>
  );
}
