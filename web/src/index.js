import React from "react"
import ReactDOM from "react-dom"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import "bootstrap/dist/css/bootstrap.min.css"

import App from "./App"
import * as serviceWorker from "./serviceWorker"

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql"
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
)

serviceWorker.unregister()
