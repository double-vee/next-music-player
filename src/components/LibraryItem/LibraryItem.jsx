import Image from 'next/image';

export default function LibraryItem({
  audioRef,
  track,
  setCurrentTrack,
  isPlaying,
}) {
  const handleSelectTrack = async () => {
    await setCurrentTrack(track);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <li className="library-item">
      <button onClick={handleSelectTrack}>
        <div className="image-wrapper">
          <Image
            src={track.cover}
            alt={track.title}
            width={290}
            height={290}
            priority={true}
          />
        </div>
        <div className="description">
          <h3>{track.title}</h3>
          <h4>{track.artist}</h4>
        </div>
      </button>
    </li>
  );
}
