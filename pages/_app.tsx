import "../styles/globals.css";
import "../styles/custom.css";
import "../styles/buttons.css";
import "../styles/card.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
