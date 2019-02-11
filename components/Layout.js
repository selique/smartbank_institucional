import Head from 'next/head'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="/_next/static/style.css" />

    </Head>

    <Header />

    {children}

    <footer>{'I`m here to stay'}</footer>
  </div>
)