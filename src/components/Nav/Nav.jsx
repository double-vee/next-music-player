export default function Nav({ libraryStatus, setLibraryStatus }) {
  return (
    <header>
      <nav>
        <h1 className="title">ThisAudio</h1>
        <button
          className="library-toggle"
          onClick={() => setLibraryStatus(!libraryStatus)}
        >
          Library
        </button>
      </nav>
    </header>
  );
}
