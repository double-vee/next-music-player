import LibraryItem from '@/components/LibraryItem/LibraryItem';

export default function Library({ tracks, setCurrentTrack }) {
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
            track={track}
            setCurrentTrack={setCurrentTrack}
          />
        ))}
      </ul>
    </section>
  );
}
