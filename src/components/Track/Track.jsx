import Image from 'next/image';
import { useContext } from 'react';

import { AudioContext } from '@/providers/AudioProvider';

export default function Track() {
  const { currentTrack } = useContext(AudioContext);

  return (
    <div className="track-wrapper">
      <div className="image-wrapper">
        <Image
          src={currentTrack.cover}
          alt={currentTrack.title}
          width={290}
          height={290}
          priority={true}
        />
      </div>
      <h2>{currentTrack.title}</h2>
      <h3>{currentTrack.artist}</h3>
    </div>
  );
}
