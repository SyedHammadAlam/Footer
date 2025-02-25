
import layout from '../components/layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <layout>
      <Component {...pageProps} />
    </layout>
  );
}
