import Layout from '@/components/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    const getLayout = Component.getLayout || ((page) => page);
    return getLayout(<Component {...pageProps} />);
  } else {
    return (
      <div className="text-white w-screen h-screen flex flex-col justify-between bg-gradient-to-r from-[#020024] from-0% via-[#6c0979] via-40% to-[#7c00ff] to-100%">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    );
  }
}
