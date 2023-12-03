import './globals.css';
import Link from 'next/link';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { ModeToggle } from '@/components/mode-toggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' className='light'>
      <Script defer src='https://identity.netlify.com/v1/netlify-identity-widget.js' />
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <div className='max-w-2xl mx-auto py-10 px-4 prose-quoteless'>
          <header>
            <div className='flex items-center justify-between'>
              <ModeToggle />
              <nav className='ml-auto text-sm font-medium space-x-6'>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
              </nav>
            </div>
          </header>
          <main>{children}</main>
        </div>
        <Script id='netlify-cms'>
          {`if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
              if (!user) {
                window.netlifyIdentity.on("login", () => {
                  document.location.href = "/admin/";
                });
              }
            });
          }`}
        </Script>
      </body>
    </html>
  );
}
