import { RxSpeakerOff, RxSpeakerLoud } from 'react-icons/rx';
import { useContext, useEffect, useState } from 'react';

import { AudioContext } from '@/providers/AudioProvider';

export default function Nav({ libraryStatus, setLibraryStatus }) {
  const { audioRef, isMuted, setIsMuted } = useContext(AudioContext);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(document.body.offsetWidth);
  }, []);

  useEffect(() => {
    if (screenWidth === 0) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;

      setScreenWidth(width);
    });

    observer.observe(document.body);

    return () => observer.disconnect();
  }, [screenWidth]);

  const toggleMuted = () => {
    if (isMuted) {
      audioRef.current.muted = false;
    } else {
      audioRef.current.muted = true;
    }
    setIsMuted(!isMuted);
  };

  const muteToggleLabel = isMuted ? 'Unmute' : 'Mute';
  const muteToggleIcon = isMuted ? <RxSpeakerOff /> : <RxSpeakerLoud />;

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
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {screenWidth > 400 ? muteToggleLabel : muteToggleIcon}
          </button>
        </div>
      </nav>
    </header>
  );
}
