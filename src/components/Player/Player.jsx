'use client';

import { useState, useRef } from 'react';

import AppWrapper from '@/components/AppWrapper/AppWrapper';
import Nav from '@/components/Nav/Nav';
import Controls from '@/components/Controls/Controls';
import Track from '@/components/Track/Track';
import Library from '@/components/Library/Library';

import { data } from '@/data';

export default function Player() {
  const [tracks, setTracks] = useState(data());
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);

  const audioRef = useRef();

  return (
    <>
      <AppWrapper
        style={
          libraryStatus
            ? undefined
            : {
                marginLeft: '0',
              }
        }
      >
        <Nav
          libraryStatus={libraryStatus}
          setLibraryStatus={setLibraryStatus}
        />
        <main>
          <section>
            <Track currentTrack={currentTrack} />
            <Controls
              audioRef={audioRef}
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
              tracks={tracks}
              setTracks={setTracks}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
            />
          </section>
        </main>
      </AppWrapper>
      <Library
        audioRef={audioRef}
        tracks={tracks}
        setTracks={setTracks}
        setCurrentTrack={setCurrentTrack}
        isPlaying={isPlaying}
        libraryStatus={libraryStatus}
      />
    </>
  );
}
