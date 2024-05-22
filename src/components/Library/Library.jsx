import { RemoveScroll } from 'react-remove-scroll';
import FocusLock from 'react-focus-lock';

import { RxCross1 } from 'react-icons/rx';
import { useContext, useEffect } from 'react';

import LibraryItem from '@/components/LibraryItem/LibraryItem';
import { AudioContext } from '@/providers/AudioProvider';

export default function Library({ libraryStatus, setLibraryStatus }) {
  const { tracks } = useContext(AudioContext);

  useEffect(() => {
    function handleKeydown(e) {
      if (e.code === 'Escape') {
        setLibraryStatus(false);
      }
    }

    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [setLibraryStatus]);

  return (
    <RemoveScroll
      enabled={libraryStatus ? true : false}
      removeScrollBar={false}
    >
      <FocusLock disabled={libraryStatus ? false : true}>
        <aside
          className={`library ${libraryStatus ? 'active' : ''}`}
          aria-hidden={libraryStatus ? false : true}
        >
          <header className="library-header">
            <h2 className="library-title">Tracks</h2>
            <button
              className="icon-wrapper"
              onClick={() => setLibraryStatus(false)}
              aria-label="Close library"
            >
              <RxCross1 />
            </button>
          </header>
          <ul
            className="library-items"
            role="list"
          >
            {tracks.map((track) => (
              <LibraryItem
                key={track.id}
                track={track}
              />
            ))}
          </ul>
        </aside>
      </FocusLock>
    </RemoveScroll>
  );
}
