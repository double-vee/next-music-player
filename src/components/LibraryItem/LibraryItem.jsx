import Image from 'next/image';

export default function LibraryItem({
  track,
  tracks,
  setTracks,
  setCurrentTrack,
}) {
  const selectTrack = () => {
    setCurrentTrack({ ...track, active: true });

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
        onClick={selectTrack}
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
