import App from '../components/App'
import Header from '../components/Header'
import Posts from '../components/Posts'

import withData from 'next-static-tools/withData'

export default withData(props => (
  <App>
    <Header pathname={props.url.pathname} />
    <hr />
    <Posts />
    <hr />
  </App>
))
