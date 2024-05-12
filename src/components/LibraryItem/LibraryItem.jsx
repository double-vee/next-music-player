import Image from 'next/image';

export default function LibraryItem({ track, setCurrentTrack }) {
  return (
    <li className="library-item">
      <button onClick={() => setCurrentTrack(track)}>
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
