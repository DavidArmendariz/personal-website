import '@/theme/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Layout from '@/theme/Layout';
import { ThemeProvider } from '@/contexts/Theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'David Armendáriz',
  description: 'Software Developer / Mathematician',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <Layout>{children}</Layout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
