import React, { Component } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import { BrowserRouter as Router, NavLink, Route } from "react-router-dom"
import { CSSTransition } from "react-transition-group"

import Loadable from "@/components/hoc/loadable"

const Home = Loadable(() => import("@/views/home/index"))
const Detail = Loadable(() => import("@/views/detail/index"))
const Edit = Loadable(() => import("@/views/edit/index"))
const About = Loadable(() => import("@/views/about/index"))

const routes = [
  { path: "/", name: "Home", exact: true, Component: Home },
  { path: "/detail/:id", name: "Detail", Component: Detail },
  { path: "/edit", name: "Create", exact: true, hidden: true, Component: Edit },
  { path: "/edit/:id", name: "Edit", Component: Edit },
  { path: "/about", name: "About", Component: About }
]

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Container className="container">
            <Navbar bg="light">
              <Nav className="mx-auto">
                {routes
                  .filter(route => route.path.indexOf(":") === -1 && !route.hidden)
                  .map(route => (
                    <Nav.Link key={route.path} as={NavLink} to={route.path} activeClassName="active" exact>
                      {route.name}
                    </Nav.Link>
                  ))}
              </Nav>
            </Navbar>

            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => {
                  return (
                    <CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
                      <div className="page">
                        <Component />
                      </div>
                    </CSSTransition>
                  )
                }}
              </Route>
            ))}
          </Container>
        </>
      </Router>
    )
  }
}

export default App
