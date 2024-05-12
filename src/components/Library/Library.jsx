import LibraryItem from '@/components/LibraryItem/LibraryItem';

export default function Library({ tracks }) {
  return (
    <section className="library">
      <h2>Library</h2>
      <ul className="library-items">
        {tracks.map((track) => (
          <LibraryItem
            key={track.id}
            track={track}
          />
        ))}
      </ul>
    </section>
  );
}
