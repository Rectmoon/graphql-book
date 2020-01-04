import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Query } from "react-apollo"
import { GET_BOOKS } from "@/graphql/Book"
import { Table, Card } from "react-bootstrap"

class Home extends Component {
  render() {
    return (
      <Query pollInterval={1000} query={GET_BOOKS}>
        {({ loading, error, data }) => {
          if (loading) return "Loading..."
          if (error) return `Error! ${error.message}`
          return (
            <Card>
              <Card.Header>
                LIST OF BOOKS
                <h4 className="fr">
                  <Link to="/edit">Add a new Book</Link>
                </h4>
              </Card.Header>

              <Card.Body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Author</th>
                    </tr>
                  </thead>

                  <tbody>
                    {data.books.map(book => (
                      <tr key={book._id}>
                        <td>
                          <Link to={`/detail/${book._id}`}>{book.title}</Link>
                        </td>
                        <td>{book.title}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          )
        }}
      </Query>
    )
  }
}

export default Home
