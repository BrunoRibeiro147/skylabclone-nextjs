import ThemeContainer from "../context/theme/ThemeContainer"
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
	return (
		<ThemeContainer>
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
		</ThemeContainer>
	)
}

export default MyApp
