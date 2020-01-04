import gql from "graphql-tag"

export const ADD_BOOK = gql`
  mutation AddBook(
    $isbn: String!
    $title: String!
    $author: String!
    $description: String!
    $publisher: String!
    $published_year: Int!
  ) {
    addBook(
      isbn: $isbn
      title: $title
      author: $author
      description: $description
      publisher: $publisher
      published_year: $published_year
    ) {
      _id
    }
  }
`

export const DELETE_BOOK = gql`
  mutation removeBook($id: String!) {
    removeBook(id: $id) {
      _id
    }
  }
`

export const UPDATE_BOOK = gql`
  mutation updateBook(
    $id: String!
    $isbn: String!
    $title: String!
    $author: String!
    $description: String!
    $publisher: String!
    $published_year: Int!
  ) {
    updateBook(
      id: $id
      isbn: $isbn
      title: $title
      author: $author
      description: $description
      publisher: $publisher
      published_year: $published_year
    ) {
      updated_date
    }
  }
`

export const GET_BOOKS = gql`
  {
    books {
      _id
      title
      author
    }
  }
`

export const GET_BOOK = gql`
  query book($bookId: String) {
    book(id: $bookId) {
      _id
      isbn
      title
      author
      description
      published_year
      publisher
      updated_date
    }
  }
`
