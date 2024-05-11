export default function Library({ tracks }) {
  return (
    <section className="library">
      <h2>Library</h2>
      <ul className="library-items">
        {tracks.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </section>
  );
}
