import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const title = "FIL-Builders";
const description = "FIL-Builders";
const url = "https://fil.builders/";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>FIL Builders</title>
        <meta name="description" content="Cross the Filecoin chasm with us." />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/og.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
