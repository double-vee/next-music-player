import LibraryItem from '@/components/LibraryItem/LibraryItem';

export default function Library({
  audioRef,
  tracks,
  setTracks,
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
            tracks={tracks}
            setTracks={setTracks}
            setCurrentTrack={setCurrentTrack}
            isPlaying={isPlaying}
          />
        ))}
      </ul>
    </section>
  );
}
