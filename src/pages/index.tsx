import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/a-markdown-page/">Show me some Markdown!</Link>
        <br />
        <Link to="/wiki">Wiki</Link>
        <br />
        <Link to="/swapi">Star Wars</Link>
        <br />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
