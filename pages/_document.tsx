import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
  // #232323

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content="Yummy-sk | 염상권" />
          <meta property="og:image" content="/og-main.png" />
          <meta property="og:description" content="Front-end Developer Sang Kwon Yeum's Protfolio Website" />

          <meta name="keywords" content="염상권, 개발자 염상권, Sang Kwon Yeum, Sang Kwon, Yummy, Yummy-sk, Yummy_SK" />
          <meta name="description" content="Website made by Yummy (Sang Kwon Yeum)" />
          <meta name="theme-color" content="#000000" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Oswald:wght@500&family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
            #__next {
              height: 100%;
              width: 100%;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
