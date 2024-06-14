import { AppProps } from 'next/app';
import Layout from './layouts/layout';

// this is the global layout for the app. 
// everything here will show up on all of the other pages
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <p>entrypoint from pages/_app.tsx</p>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;