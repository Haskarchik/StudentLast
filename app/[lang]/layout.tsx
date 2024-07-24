import type { Metadata, ResolvingMetadata } from 'next'
import { Locale, i18n } from '@/i18n.config'
import { Inter } from 'next/font/google'
import "../App.scss";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
const inter = Inter({ subsets: ['latin'] })

type Props = {
  params: { lang: Locale }
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang=="ua"?"uk":"en"}>
      <body className={inter.className}>
        <div className="root">
          <header>
            <Navbar lang={params.lang}/>
          </header>
          <main>
            <div className="routes">
              <div className="routes scroll-container">
                {children}
              </div>
            </div>
          </main>
          <footer>
            <Footer lang={params.lang}/>
          </footer>
        </div>
      </body>
    </html>
  )
}
