import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Pinata' : 'Pinata'}</title>
        <meta name="description" content="Pinata ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between items-center px-4 shadow-md">
            <Link href="/">
              <a className="text-lg font-bold">Pinata</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          <p>Copyright &copy; {new Date().getFullYear()} - Pinata</p>
        </footer>
      </div>
    </>
  );
}
