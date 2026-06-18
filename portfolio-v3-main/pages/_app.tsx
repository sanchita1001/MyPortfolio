import React from 'react';
import '@/styles/globals.scss';
import Layout from '@/components/layout';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import { ReactQueryClientProvider } from '@/components/ReactQueryClientProvider';
import SplashCursor from '@/components/SplashCursor';

export default function App({ Component, pageProps, session }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Sanchita Jain — Computer Engineering Student & Full-Stack Developer</title>
        <meta name="title" content="Sanchita Jain — Computer Engineering Student & Full-Stack Developer" />
        <meta
          name="description"
          content="Computer Engineering undergraduate at Thapar Institute passionate about full-stack development, cybersecurity, and building scalable web applications. Experienced in MERN stack development and organizing technical competitions."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sanchitajain.dev" />
        <meta
          property="og:title"
          content="Sanchita Jain — Computer Engineering Student & Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Computer Engineering undergraduate at Thapar Institute passionate about full-stack development, cybersecurity, and building scalable web applications."
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sanchitajain.dev" />
        <meta
          property="twitter:title"
          content="Sanchita Jain — Computer Engineering Student & Full-Stack Developer"
        />
        <meta
          property="twitter:description"
          content="Computer Engineering undergraduate at Thapar Institute passionate about full-stack development, cybersecurity, and building scalable web applications."
        />
      </Head>
      <SplashCursor />
      <ThemeProvider attribute="class">
        <SessionProvider session={session}>
          <ReactQueryClientProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ReactQueryClientProvider>
        </SessionProvider>
      </ThemeProvider>
      <Analytics />
    </>
  );
}
