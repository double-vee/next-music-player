import LibraryItem from '@/components/LibraryItem/LibraryItem';

export default function Library({
  audioRef,
  tracks,
  setTracks,
  setCurrentTrack,
  isPlaying,
  libraryStatus,
}) {
  return (
    <aside className={`library ${libraryStatus ? 'active' : ''}`}>
      <h2 className="library-title">Tracks</h2>
      <ul
        className="library-items"
        role="list"
      >
        {tracks.map((track) => (
          <LibraryItem
            key={track.id}
            audioRef={audioRef}
            track={track}
            tracks={tracks}
            setTracks={setTracks}
            setCurrentTrack={setCurrentTrack}
            isPlaying={isPlaying}
          />
        ))}
      </ul>
    </aside>
  );
}
