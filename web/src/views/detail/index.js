import React from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Query, Mutation } from 'react-apollo'
import { GET_BOOK, DELETE_BOOK } from '@/graphql/Book'
import { Card, ButtonToolbar, Button } from 'react-bootstrap'

function Detail() {
  const history = useHistory()
  const { id } = useParams()

  return (
    <Query
      pollInterval={500}
      query={GET_BOOK}
      variables={{
        bookId: id
      }}
    >
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`
        if (!data.book) return null

        const {
          book: { _id, isbn, author, description, published_year, publisher, updated_date }
        } = data

        return (
          <Card>
            <Card.Header>
              <div>
                Book Detail
                <Link to="/" className="fr" as="div">
                  Book List
                </Link>
              </div>
            </Card.Header>

            <Card.Body>
              <dl>
                <dt>ISBN:</dt>
                <dd>{isbn}</dd>

                <dt>Author:</dt>
                <dd>{author}</dd>

                <dt>Description</dt>
                <dd>{description}</dd>

                <dt>Published Year</dt>
                <dd>{published_year}</dd>

                <dt>Publisher</dt>
                <dd>{publisher}</dd>

                <dt>Updated</dt>
                <dd>{updated_date}</dd>
              </dl>

              <Mutation mutation={DELETE_BOOK} key={_id} onCompleted={() => history.push('/')}>
                {(removeBook, { loading, error }) => (
                  <div>
                    <form
                      onSubmit={e => {
                        e.preventDefault()
                        removeBook({
                          variables: { id: _id }
                        })
                      }}
                    >
                      <ButtonToolbar>
                        <Button variant="outline-primary" as={Link} to={`/edit/${_id}`}>
                          编辑
                        </Button>
                        <Button variant="outline-danger" type="submit">
                          删除
                        </Button>
                      </ButtonToolbar>
                    </form>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error :( Please try again</p>}
                  </div>
                )}
              </Mutation>
            </Card.Body>
          </Card>
        )
      }}
    </Query>
  )
}

export default Detail
