import { useContext } from 'react';

import { AudioContext } from '@/providers/AudioProvider';

export default function Nav({ libraryStatus, setLibraryStatus }) {
  const { audioRef, isMuted, setIsMuted } = useContext(AudioContext);

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
