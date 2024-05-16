import { useState } from 'react';

export default function Nav({ audioRef, libraryStatus, setLibraryStatus }) {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMuted = () => {
    if (isMuted) {
      audioRef.current.muted = false;
    } else {
      audioRef.current.muted = true;
    }
    setIsMuted(!isMuted);
  };

  return (
    <header className="app-header">
      <nav>
        <h1 className="title">TrueAudio</h1>
        <div className="btn-wrapper">
          <button
            className="nav-btn library-toggle"
            onClick={() => setLibraryStatus(!libraryStatus)}
          >
            Library
          </button>
          <button
            className="nav-btn mute-toggle"
            onClick={toggleMuted}
          >
            {isMuted ? 'Unmute' : 'Mute'}
          </button>
        </div>
      </nav>
    </header>
  );
}
