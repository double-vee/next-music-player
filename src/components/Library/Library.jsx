import LibraryItem from '@/components/LibraryItem/LibraryItem';

export default function Library({
  audioRef,
  tracks,
  setCurrentTrack,
  isPlaying,
}) {
  return (
    <section className="library">
      <h2>Library</h2>
      <ul
        className="library-items"
        role="list"
      >
        {tracks.map((track) => (
          <LibraryItem
            key={track.id}
            audioRef={audioRef}
            track={track}
            setCurrentTrack={setCurrentTrack}
            isPlaying={isPlaying}
          />
        ))}
      </ul>
    </section>
  );
}
