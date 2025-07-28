import { DefaultSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '../contexts/ThemeContext';
import { defaultSEO } from '../config/seo';
import Theme from '../styles/theme';

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <ThemeProvider>
        <Theme>
          <AnimatePresence mode="wait" initial={false}>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </Theme>
      </ThemeProvider>
    </>
  );
}
 