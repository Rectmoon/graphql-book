import React from "react"
import { Link, useParams, useHistory } from "react-router-dom"
import { Mutation, Query } from "react-apollo"
import { ADD_BOOK, GET_BOOK, UPDATE_BOOK } from "@/graphql/Book"
import { Card } from "react-bootstrap"

function Edit() {
  const history = useHistory()
  const { id } = useParams()
  const dto = {}
  const mutationName = id ? UPDATE_BOOK : ADD_BOOK
  const pageTitle = id ? "UPDATE BOOK" : "ADD BOOK"

  const getMutation = (data = { book: {} }) => {
    const {
      book: { _id, isbn, title, author, description, published_year, publisher }
    } = data

    return (
      <Mutation mutation={mutationName} onCompleted={() => history.push("/")}>
        {(mutationName, { loading, error }) => (
          <Card>
            <Card.Header>
              {pageTitle}
              <h4 className="fr">
                <Link to="/">Book List</Link>
              </h4>
            </Card.Header>
            <Card.Body>
              <form
                onSubmit={e => {
                  e.preventDefault()
                  const variables = Object.keys(dto).reduce((res, next) => {
                    res[next] = dto[next].value
                    return res
                  }, {})
                  variables.published_year = ~~variables.published_year

                  _id && (variables.id = _id)
                  mutationName({ variables })
                  Object.keys(dto).forEach(key => {
                    dto[key] = ""
                  })
                }}
              >
                <div className="form-group">
                  <label htmlFor="isbn">ISBN:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="isbn"
                    placeholder="ISBN"
                    defaultValue={isbn}
                    ref={el => {
                      dto.isbn = el
                    }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="title">Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Title"
                    defaultValue={title}
                    ref={el => {
                      dto.title = el
                    }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="author">Author:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="author"
                    placeholder="Author"
                    defaultValue={author}
                    ref={el => {
                      dto.author = el
                    }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    className="form-control"
                    name="description"
                    placeholder="Description"
                    cols="80"
                    rows="3"
                    defaultValue={description}
                    ref={el => {
                      dto.description = el
                    }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="publisher">Publisher:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="publisher"
                    placeholder="Publisher"
                    defaultValue={publisher}
                    ref={el => {
                      dto.publisher = el
                    }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="published_year">Published Year:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="published_year"
                    placeholder="Published Year"
                    defaultValue={published_year}
                    ref={el => {
                      dto.published_year = el
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </Card.Body>
          </Card>
        )}
      </Mutation>
    )
  }

  return id ? (
    <Query
      query={GET_BOOK}
      variables={{
        bookId: id
      }}
    >
      {({ loading, error, data }) => {
        if (loading) return "Loading..."
        if (error) return `Error! ${error.message}`
        return getMutation(data)
      }}
    </Query>
  ) : (
    getMutation()
  )
}

export default Edit
