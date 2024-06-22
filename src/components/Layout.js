import Head from 'next/head';
import Image from 'next/image';
import logo from '../../public/logo.white.png';

const Layout = ({ children }) => {
  return (
    <div className="bg-white text-primary min-h-screen flex flex-col">
      <Head>
        <title>FIL Builders</title>
        <meta name="description" content="Cross the Filecoin chasm with us." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-primary text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Image src={logo} alt="FIL-B logo" width={100} height={50} />
          <nav>
            <a href="/" className="mx-2">Home</a>
            <a href="/about" className="mx-2">About</a>
            <a href="/blog" className="mx-2">Blog</a>
          </nav>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-primary text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} FIL Builders. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

