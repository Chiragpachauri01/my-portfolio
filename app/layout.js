import { Inter } from "next/font/google"; 
import './globals.css';

const inter = Inter({ subsets: ["latin"] }); 

export const metadata = { 
  title: 'Chandresh Pachauri — Creative Technologist', 
  description: 'Playful, animated portfolio — React, Next.js, GenAI, RAG, vector search.', 
};

// RootLayout is a SERVER Component by default
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="color-scheme" content="dark light" />
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
      </head>
      {/* The `children` prop here is where app/page.js is rendered */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}