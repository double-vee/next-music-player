'use client';

import Image from 'next/image';

export default function Track({ currentTrack }) {
  return (
    <div className="track-wrapper">
      <div className="image-wrapper">
        <Image
          src={currentTrack.cover}
          alt={currentTrack.title}
          width={200}
          height={200}
          priority={true}
        />
      </div>
      <h2>{currentTrack.title}</h2>
      <h3>{currentTrack.artist}</h3>
    </div>
  );
}
