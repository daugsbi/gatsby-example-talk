import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { SwapiQuery } from './__generated__/SwapiQuery'
import { PageData } from '../templates/page'

export const query = graphql`
  query SwapiQuery {
    swapi {
      allPersons {
        name
        birthYear
        eyeColor
        gender
        hairColor
        height
      }
    }
  }
`

type RedditPageProps = PageData<SwapiQuery>

const RedditPage: React.FC<RedditPageProps> = ({ data }) => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Star Wars API</h1>
        {data.swapi.allPersons.map(person => (
          <React.Fragment>
            <h2>{person.name}</h2>
            <p>
              {person.eyeColor} | {person.hairColor}
            </p>
          </React.Fragment>
        ))}

        <Link to="/reddit/">Go to Reddit</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default RedditPage
