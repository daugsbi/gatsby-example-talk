import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { WikiQuery } from './__generated__/WikiQuery'
import { PageData } from '../templates/page'

export const query = graphql`
  query WikiQuery {
    allWikipediaArticle {
      edges {
        node {
          title
          description
          wikipediaId
        }
      }
    }
  }
`

type WikiPage = PageData<WikiQuery>

const WikiPage: React.FC<WikiPage> = ({ data }) => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Wiki</h1>
        {data.allWikipediaArticle.edges.map(({ node }) => (
          <React.Fragment>
            <h2>{node.title}</h2>
            <p>{node.description}</p>
            <a href={`http://en.wikipedia.org/wiki/${node.wikipediaId}`}>Link to the article</a>
          </React.Fragment>
        ))}
        <br />
        <br />
        <Link to="/reddit/">Go to Reddit</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default WikiPage
