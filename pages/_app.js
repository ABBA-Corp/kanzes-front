import React from 'react';
import '@/styles/FAQ.scss';
import '@/styles/News.scss';
import '@/styles/About.scss';
import '@/styles/Modal.scss';
import '@/styles/Loader.scss';
import '@/styles/Navbar.scss';
import '@/styles/Header.scss';
import '@/styles/Footer.scss';
import '@/styles/globals.scss';
import '@/styles/AllNews.scss';
import '@/styles/Services.scss';
import '@/styles/Products.scss';
import '@/styles/HomeNews.scss';
import '@/styles/Contacts.scss';
import '@/styles/Searching.scss';
import '@/styles/HomeAbout.scss';
import '@/styles/Advantages.scss';
import '@/styles/TopProducts.scss';
import '@/styles/HomeServices.scss';
import '@/styles/SortProducts.scss';
import '@/styles/AnimationChair.scss';
import '@/styles/SliderProducts.scss';
import '@/styles/ScrollTopButton.scss';
import Layout from '@/components/Layout';
import { appWithTranslation } from 'next-i18next';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

function App({ Component, pageProps }) {

  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  )
};

export default appWithTranslation(App);
