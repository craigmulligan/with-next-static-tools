import App from '../components/App'
import Header from '../components/Header'
import Post from '../components/Post'

import withData from 'next-static-tools/withData'

export default withData(props => (
  <App>
    <Header pathname={props.url.pathname} />
    <Post id={props.url.query.id} />
  </App>
))
