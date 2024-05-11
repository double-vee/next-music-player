'use client';

import { useState } from 'react';

import Controls from '@/components/Controls/Controls';
import Track from '@/components/Track/Track';
import Library from '@/components/Library/Library';
import { data } from '@/data';

export default function Player() {
  const [tracks, setTracks] = useState(data());
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);

  return (
    <>
      <section>
        <Track currentTrack={currentTrack} />
        <Controls currentTrack={currentTrack} />
      </section>
      <Library tracks={tracks} />
    </>
  );
}
