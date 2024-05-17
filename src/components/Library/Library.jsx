import { RxCross1 } from 'react-icons/rx';

import LibraryItem from '@/components/LibraryItem/LibraryItem';

export default function Library({
  tracks,
  setTracks,
  setCurrentTrack,
  libraryStatus,
  setLibraryStatus,
}) {
  return (
    <aside className={`library ${libraryStatus ? 'active' : ''}`}>
      <header className="library-header">
        <h2 className="library-title">Tracks</h2>
        <button
          className="icon-wrapper"
          onClick={() => setLibraryStatus(false)}
        >
          <RxCross1 />
        </button>
      </header>
      <ul
        className="library-items"
        role="list"
      >
        {tracks.map((track) => (
          <LibraryItem
            key={track.id}
            track={track}
            tracks={tracks}
            setTracks={setTracks}
            setCurrentTrack={setCurrentTrack}
          />
        ))}
      </ul>
    </aside>
  );
}
