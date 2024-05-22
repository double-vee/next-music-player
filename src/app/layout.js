import { Inter } from 'next/font/google';

import AudioProvider from '@/providers/AudioProvider';

import '@/styles/styles.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TrueAudio',
  description: 'Music player for JS developers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AudioProvider>{children}</AudioProvider>
      </body>
    </html>
  );
}
