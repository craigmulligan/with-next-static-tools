import App from '../components/App'
import Header from '../components/Header'
import Content from '../components/Content'
import withData from 'next-static-tools/withData'
import Head from 'next/head'
const ABOUT_URL =
  'https://raw.githubusercontent.com/hobochild/next-static-tools/master/README.md'

export default withData(props => (
  <App>
    <Head>
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css"
      />
    </Head>
    <Header pathname={props.url.pathname} />
    <Content url={ABOUT_URL} />
  </App>
))
