import ThemeRegistry from '@/components/themeRegistry/ThemeRegistry';
import { ConversationTopicDataProvider } from '@/context/conversationContext';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frontend Web Challenge',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <ThemeRegistry>
        <ConversationTopicDataProvider>
          <body>{children}</body>
        </ConversationTopicDataProvider>
      </ThemeRegistry>
    </html>
  );
}
