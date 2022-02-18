import type { AppProps } from "next/app";
import "../styles/globals.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="Surya | Blockchain Developer"
        titleTemplate="Surya | Blockchain Developer"
        defaultTitle="Surya | Blockchain Developer"
        description="Hey! I'm Surya, A Blockchain Developer, Blogger and a Student!"
        openGraph={{
          url: "https://www.OFFsec.tech/",
          title: "Surya | Blockchain Developer",
          description:
            "Hey! I'm Surya, A Blockchain Developer, Blogger and a Student!",
          images: [
            {
              url: "https://ipfs.io/ipfs/QmTtLweNqumiX4yHKGnT5wnzgjVZBbwkXD6mcX4L5BJhv8",
              width: 800,
              height: 420,
              alt: "Surya | Blockchain Developer",
            },
          ],
        }}
        twitter={{
          handle: "@__suryateja",
          site: "@__suryateja",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Blockchain Developer, Surya, a-Surya, Web Developer, web development, web developer, blogger, tech enthusiast, open source, Data Sciece",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assests/avatar.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
