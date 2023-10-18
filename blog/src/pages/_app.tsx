import '../../styles/globals.css';
import Head from 'next/head';
import Header from '../../components/Header';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Guilherme Ferreira</title>
      </Head>
      <Header name={''} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;