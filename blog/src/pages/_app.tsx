import '../../styles/globals.css';
import Head from 'next/head';
import Header from '../../components/Header';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Guilherme Ferreira</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
