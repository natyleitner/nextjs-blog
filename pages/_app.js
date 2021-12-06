import '../styles/global.css';

/**
 * Notes
 * This App component is the top-level component which will be common across all the different pages.
 * After adding this file you need to restart the dev server
 * This file is the only one where you can import global styles!!!
 */

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
