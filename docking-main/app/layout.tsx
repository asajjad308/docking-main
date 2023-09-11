'use client'
import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SessionProvider from './context/SessionContext';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Docking',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html lang="en">
        <Head>
          <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css" />
        </Head>
        <body className={inter.className}>
          <Nav initialActive={undefined} /> {/* Include the Navbar component */}
          {children}
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}
