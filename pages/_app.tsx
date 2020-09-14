import { AnimatePresence } from 'framer-motion';
import ThemeContainer from '../context/theme/ThemeContainer';

const MyApp = ({ Component, pageProps, router }) => (
  <ThemeContainer>
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  </ThemeContainer>
);

export default MyApp;
