import Image from 'next/image';

export default function LibraryItem({
  audioRef,
  track,
  tracks,
  setTracks,
  setCurrentTrack,
  isPlaying,
}) {
  const handleSelectTrack = async () => {
    await setCurrentTrack({ ...track, active: true });

    if (isPlaying) {
      audioRef.current.play();
    }

    const nextTracks = tracks.map((item) => {
      if (item.id === track.id) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });

    setTracks(nextTracks);
  };

  return (
    <li className="library-item">
      <button
        className={track.active ? 'selected' : ''}
        onClick={handleSelectTrack}
      >
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
