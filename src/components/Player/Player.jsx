'use client';

import { useState } from 'react';

import AppWrapper from '@/components/AppWrapper/AppWrapper';
import Nav from '@/components/Nav/Nav';
import Controls from '@/components/Controls/Controls';
import Track from '@/components/Track/Track';
import Library from '@/components/Library/Library';

export default function Player() {
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <>
      <AppWrapper
        style={
          libraryStatus
            ? undefined
            : {
                marginLeft: '0',
              }
        }
      >
        <Nav
          libraryStatus={libraryStatus}
          setLibraryStatus={setLibraryStatus}
        />
        <main>
          <section>
            <Track />
            <Controls />
          </section>
        </main>
      </AppWrapper>
      <Library
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
    </>
  );
}
