import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta property="og:title" content="Big Mack Truck" />
          <meta property="og:description" content="If you know you know" />
          <meta property="og:image" content="./screenshot.png" />
          <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😛</text></svg>" />
        </Head>
        <body>
          <title>WAP</title>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document;
